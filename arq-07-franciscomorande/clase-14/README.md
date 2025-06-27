# clase-14
## prueba para entrega final


### dedos
![01 dedos](https://github.com/user-attachments/assets/05b0e1c7-723c-4395-8b14-ef47c980b182)

![01 dedos 2](https://github.com/user-attachments/assets/41951fd0-e89e-4456-86aa-54bc06ec3aef)

![01 dedo 3](https://github.com/user-attachments/assets/24e20c6e-ae17-4be4-a4fa-1fba894fa58e)

![01 dedos 4](https://github.com/user-attachments/assets/97219d55-8ad7-43ef-b8a5-a534369b835d)


### obstaculos
![pelota hitbox](https://github.com/user-attachments/assets/e3eb3881-389a-4feb-8f0a-eaddc78fbab1)

![20 pelotas](https://github.com/user-attachments/assets/0e128b17-a4cf-4027-a937-ac8006b59705)

### objetos

![objeto simple respawns](https://github.com/user-attachments/assets/b9038f57-94f7-4e1d-80ba-cf17fa1387e8)

![spawn set interval](https://github.com/user-attachments/assets/debf6f72-f972-46b8-ab68-893503f6819a)

![objeto estrella](https://github.com/user-attachments/assets/dc192d71-da39-4c68-8c65-d254782ef969)

### bufos/debufos

![02 enemigo 1](https://github.com/user-attachments/assets/77ecb34a-7cb7-4461-bd10-0e8e92ec9dfb)

![02 enemigo 2](https://github.com/user-attachments/assets/904b184b-c6b9-49d0-9cee-cd6323c29c3f)

![03 tamano](https://github.com/user-attachments/assets/9a5a384f-0a1a-4a72-b4d1-fa85e3cf0bcc)

![04 visibilidad](https://github.com/user-attachments/assets/c1b77b5b-a497-46bf-9413-8d63d24ca01f)

![objeto estrella  y bufo](https://github.com/user-attachments/assets/edf19c8c-8359-4aec-9a74-a869208588de)

### textos, puntajes y temporizadores

![7 textos](https://github.com/user-attachments/assets/e72de891-a43b-4850-92ae-ff5e9f6150da)


### problemas

![problema carga](https://github.com/user-attachments/assets/ed42b8ae-79fe-48ff-8896-84fc0e356579)

![problema carga solucion](https://github.com/user-attachments/assets/a11de62d-5879-4db3-bc24-e171911f9ffe)


~~~ javascript
        let balls = []; // almacena todas las instancias de Ball
        const BALL_SPAWN_DELAY = 1000; // Pelotas aparecen después de 1 segundo para esta demo
        let gameStartTime; // Tiempo de inicio del juego
        let ballsSpawned = false; // controlar si las pelotas ya se generaron


        // comportamiento y tamaño
        class Ball {
            constructor() {
                this.x = random(width);      // Posición X aleatoria
                this.y = random(height);     // Posición Y aleatoria
                this.d = random(15, 40);     // Diámetro aleatorio
                this.xspeed = random(-2, 2); // Velocidad X aleatoria
                this.yspeed = random(-2, 2); // Velocidad Y aleatoria
                this.color = [255, 255, 255]; // Color de la pelota es blanco fijo
            }

            // movimiento de las pelotas
            move() {
                this.xspeed += random(-0.1, 0.1);
                this.yspeed += random(-0.1, 0.1);
                this.xspeed = constrain(this.xspeed, -5, 5);
                this.yspeed = constrain(this.yspeed, -5, 5);
                this.x += this.xspeed;
                this.y += this.yspeed;
            }

            // rebotes al tocar el muro
            bounce() {
                let r = this.d / 2;
                if (this.x < r) {
                    this.x = r;
                    this.xspeed *= -1;
                } else if (this.x > width - r) {
                    this.x = width - r;
                    this.xspeed *= -1;
                }
                if (this.y < r) {
                    this.y = r;
                    this.yspeed *= -1;
                } else if (this.y > height - r) {
                    this.y = height - r;
                    this.yspeed *= -1;
                }
            }

            // dibujo
            display() {
                fill(...this.color);
                noStroke();
                ellipse(this.x, this.y, this.d);
            }
        }

       
        function setup() {
            createCanvas(windowWidth, windowHeight);
            gameStartTime = millis(); // Inicializa el tiempo de inicio
        }

   
        function draw() {

            background(0); // Limpia el fondo en cada frame

            // spawn de las pelotas
            if (!ballsSpawned && millis() - gameStartTime >= BALL_SPAWN_DELAY) {
                for (let i = 0; i < 20; i++) { // Crea 10 pelotas
                    balls.push(new Ball());
                }
                ballsSpawned = true;
            } 
                for (let ball of balls) {
                    ball.move();
                    ball.bounce();
                    ball.display();
                }
            }

~~~

