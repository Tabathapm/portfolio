package storage

import (
	"fmt"
	"log"
	"os" // ¡Ahora sí lo vamos a usar!

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConectarDB() {
	// Cargamos el .env que está en la raíz del proyecto
	// Como estamos en /backend, subimos un nivel con ".."
	err := godotenv.Load("../.env")
	if err != nil {
		log.Println("No se encontró el archivo .env, usando variables de entorno del sistema")
	}

	// Leemos las variables del .env
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	host := "127.0.0.1" // Usar IP directa a veces evita líos con localhost en Windows
	port := os.Getenv("DB_PORT")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", 
		host, user, password, dbname, port)
	
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("No pude conectarme a la base de datos: ", err)
	}

	fmt.Println("¡Conexión exitosa! La base de datos está lista para brillar. ✨")
}