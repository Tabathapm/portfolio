package main

import (
	"github.com/Tabathapm/portfolio/backend/internal/storage"
	"github.com/Tabathapm/portfolio/backend/internal/models" // Se importa el nuevo modelo.
	"github.com/Tabathapm/portfolio/backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

// Middleware para habilitar CORS
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") // Permite cualquier origen
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	// Conexión a la DB
	storage.ConectarDB()

	// Automigración: GORM crea la tabla "proyectos" basándose en el struct
	// Si ya existe, la actualiza sin borrar los datos.
	storage.DB.AutoMigrate(&models.Proyecto{})

	r := gin.Default()

	// Se aplica el middleware CORS antes de todas las rutas
	r.Use(CORSMiddleware())

	// Nueva ruta para crear proyectos
	r.POST("/proyectos", handlers.CrearProyecto)

	//Ruta para listar los proyectos
	r.GET("/proyectos", handlers.ListarProyectos)

	r.Run(":8080")
}