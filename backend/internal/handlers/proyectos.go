package handlers

import (
	"net/http"
	"github.com/Tabathapm/portfolio/backend/internal/models"
	"github.com/Tabathapm/portfolio/backend/internal/storage"
	"github.com/gin-gonic/gin"
)


func CrearProyecto(c *gin.Context) {
	var nuevoProyecto models.Proyecto

	// Se intenta "bindear" el JSON que viene del front al struct de Go
	if err := c.ShouldBindJSON(&nuevoProyecto); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Los datos enviados no son válidos, ¡chequealos! 🧐"})
		return
	}

	// Se guarda en la base de datos usando GORM
	resultado := storage.DB.Create(&nuevoProyecto)
	if resultado.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No pudimos guardar el proyecto en la DB 😢"})
		return
	}

	// 3. Si todo sale bien, se responde con éxito
	c.JSON(http.StatusCreated, gin.H{
		"mensaje": "¡Proyecto guardado con éxito!",
		"data":    nuevoProyecto,
	})
}