package main

import (
	"github.com/Tabathapm/portfolio/backend/internal/storage"
	"github.com/gin-gonic/gin"
)

func main() {
	// conexión
	storage.ConectarDB()

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Backend online y conectado a la DB. ¡Todo marcha bien! 🧣",
		})
	})

	r.Run(":8080")
}