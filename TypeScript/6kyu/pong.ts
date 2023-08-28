/*
Lets play some Pong!

pong

For those who don't know what Pong is, it is a simple arcade game where two players can move their paddles to hit a ball towards the opponent's side of the screen, gaining a point for each opponent's miss. You can read more about it here.

Task:
You must finish the Pong class. It has a constructor which accepts the maximum score a player can get throughout the game, and a method called play. This method determines whether the current player hit the ball or not, i.e. if the paddle is at the sufficient height to hit it back. There're 4 possible outcomes: player successfully hits the ball back, player misses the ball, player misses the ball and his opponent reaches the maximum score winning the game, either player tries to hit a ball despite the game being over. You can see the input and output description in detail below.

"Play" method input:
ball position - The Y coordinate of the ball
player position - The Y coordinate of the centre(!) of the current player's paddle
"Play" method output:
One of the following strings:

"Player X has hit the ball!" - If the ball "hits" the paddle
"Player X has missed the ball!" - If the ball is above/below the paddle
"Player X has won the game!" - If one of the players has reached the maximum score
"Game Over!" - If the game has ended when the play method is called
Important notes:
Players take turns hitting the ball, always starting the game with the Player 1.
The paddles are 7 pixels in height.
The ball is 1 pixel in height.
*/

export class Pong {
    maxScore: number
    phase: boolean
    score: number[]

    constructor (maxScore: number) {
        this.maxScore = maxScore
        this.phase = false
        this.score = [0,0]
    }

    public play = (ballPos: number, playerPos: number): string => {
        if (this.score[0] >= this.maxScore || this.score[1] >= this.maxScore) return "Game Over!"

        if (ballPos > playerPos - 4 && ballPos < playerPos + 4) {
            const responseString = `Player ${this.phase === false ? "1" : "2"} has hit the ball!`
            this.phase = !this.phase
            return responseString
        } else {
            if (!this.phase) {
                this.score = [this.score[0] + 1, this.score[1]]
            } else {
                this.score = [this.score[0], this.score[1] + 1]
            }
            if (this.score[0] >= this.maxScore || this.score[1] >= this.maxScore){
                const responseString = `Player ${this.phase === false ? "2" : "1"} has won the game!`
                this.phase = !this.phase
                return responseString
            } else {
                const responseString = `Player ${this.phase === false ? "1" : "2"} has missed the ball!`
                this.phase = !this.phase
                return responseString
            }
        }
    }
}