package main

import (
	"github.com/Tabathapm/portfolio/backend/internal/storage"
	"github.com/Tabathapm/portfolio/backend/internal/models" // Se importa el nuevo modelo.
	"github.com/Tabathapm/portfolio/backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

func main() {
	// Conexión a la DB
	storage.ConectarDB()

	// Automigración: GORM crea la tabla "proyectos" basándose en el struct
	// Si ya existe, la actualiza sin borrar los datos.
	storage.DB.AutoMigrate(&models.Proyecto{})

	r := gin.Default()

	// Nueva ruta para crear proyectos
	r.POST("/proyectos", handlers.CrearProyecto)

	//Ruta para listar los proyectos
	r.GET("/proyectos", handlers.ListarProyectos)

	r.Run(":8080")
}