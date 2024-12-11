import {
  Position,
  ChessPiece,
  Pawn,
  Bishop,
  Knight,
  Rook,
  Queen,
  King,
} from "./ChessPiece";

export class ChessBoard {
  private board: (ChessPiece | null)[][];

  constructor() {
    this.board = this.initializeBoard();
  }

  private initializeBoard(): (ChessPiece | null)[][] {
    const board: (ChessPiece | null)[][] = [];

    for (let i = 0; i < 8; i++) {
      const row = new Array(8).fill(null);
      board.push(row);
    }

    // Initialize Pawns
    for (let col = 0; col < 8; col++) {
      board[1][col] = new Pawn({ row: 1, col }, "white");
      board[6][col] = new Pawn({ row: 6, col }, "black");
    }

    // Initialize white pieces
    board[0] = [
      new Rook({ row: 0, col: 0 }, "white"),
      new Knight({ row: 0, col: 1 }, "white"),
      new Bishop({ row: 0, col: 2 }, "white"),
      new Queen({ row: 0, col: 3 }, "white"),
      new King({ row: 0, col: 4 }, "white"),
      new Bishop({ row: 0, col: 5 }, "white"),
      new Knight({ row: 0, col: 6 }, "white"),
      new Rook({ row: 0, col: 7 }, "white"),
    ];

    // Initialize black pieces
    board[0] = [
      new Rook({ row: 7, col: 0 }, "black"),
      new Knight({ row: 7, col: 1 }, "black"),
      new Bishop({ row: 7, col: 2 }, "black"),
      new Queen({ row: 7, col: 3 }, "black"),
      new King({ row: 7, col: 4 }, "black"),
      new Bishop({ row: 7, col: 5 }, "black"),
      new Knight({ row: 7, col: 6 }, "black"),
      new Rook({ row: 7, col: 7 }, "black"),
    ];

    return board;
  }

  getPieceAt(position: Position): ChessPiece | null {
    return this.board[position.row][position.col];
  }

  setPieceAt(position: Position, piece: ChessPiece | null): void {
    this.board[position.row][position.col] = piece;
  }

  printBoard(): void {
    this.board.forEach((row) => {
      console.log(row.map((piece) => (piece ? piece.name[0] : ".")).join(" "));
    });
  }
}
