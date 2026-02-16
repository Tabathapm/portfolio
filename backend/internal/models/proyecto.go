package models

import "gorm.io/gorm"

// Proyecto representa un trabajo realizado por mi
type Proyecto struct {
	gorm.Model          // Agrega ID, CreatedAt, UpdatedAt y DeletedAt automáticamente
	Titulo      string `json:"titulo" gorm:"not null"`
	Descripcion string `json:"descripcion"`
	Tecnologias string `json:"tecnologias"` // Ej: "Go, React, Docker"
	ImagenURL   string `json:"imagen_url"`
	GithubURL   string `json:"github_url"`
	DeployURL   string `json:"deploy_url"`
}