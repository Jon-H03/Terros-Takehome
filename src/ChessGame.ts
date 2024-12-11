import { ChessBoard } from "./ChessBoard";
import { Position } from "./ChessPiece";

export class ChessGame {
    private board: ChessBoard;
    private turn: "white" | "black";

    constructor() {
        this.board = new ChessBoard();
        this.turn = "white";
    }

    movePiece(start: Position, end: Position): boolean {
        const piece = this.board.getPieceAt(start);

        if (!piece) {
            console.log("Invalid move: No piece was present at that position.");
            return false;
        }

        if (piece.color !== this.turn) {
            console.log("Invalid move: Not your turn.")
            return false;
        }

        if (!piece.isValidMove(end)) {
            console.log("Invalid move for this piece.");
            return false;
        }

        // Move piece otherwise
        this.board.setPieceAt(end, piece);
        this.board.setPieceAt(start, piece);
        piece.position = end;

        this.turn = this.turn === "white" ? "black" : "white";
        return true;
    }

    printBoard(): void {
        this.board.printBoard();
    }
}