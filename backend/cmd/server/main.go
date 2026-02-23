package main

import (
	"github.com/joho/godotenv"
	"github.com/Tabathapm/portfolio/backend/internal/storage"
	"github.com/Tabathapm/portfolio/backend/internal/models" 
	"github.com/Tabathapm/portfolio/backend/internal/handlers"
	"github.com/gin-gonic/gin"
	"os"
)

// Middleware para habilitar CORS
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") // Permite cualquier origen
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, X-Swift-Token")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func MiddlewareSeguridad() gin.HandlerFunc {
    tokenEnEnv := os.Getenv("ADMIN_TOKEN")

    return func(c *gin.Context) {
        // Se busca la clave que envía el cliente 
        claveRecibida := c.GetHeader("X-Swift-Token")

        if claveRecibida != tokenEnEnv {
            c.JSON(401, gin.H{"error": "You need to calm down, no tenés acceso."})
            c.Abort()
            return
        }
        c.Next()
    }
}

func main() {
	godotenv.Load()
	// Conexión a la DB
	storage.ConectarDB()

	// Automigración: GORM crea la tabla "proyectos" basándose en el struct. Si ya existe, la actualiza sin borrar los datos.
	storage.DB.AutoMigrate(&models.Proyecto{})

	r := gin.Default()
	r.Use(CORSMiddleware()) // Se aplica el middleware CORS antes de todas las rutas

	//Rutas públicas
	r.GET("/proyectos", handlers.ListarProyectos)

	// Ruta protegidas
	r.POST("/proyectos", MiddlewareSeguridad(), handlers.CrearProyecto)
	r.DELETE("/proyectos/:id", MiddlewareSeguridad(), handlers.EliminarProyecto)

	r.Run(":8080")
}