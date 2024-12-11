
export type Position = {
    row: number;
    col: number;
}

export class ChessPiece {
    name: string;
    position: Position;
    color: "white" | "black";

    constructor(name: string, position: Position, color: "white" | "black") {
        this.name = name;
        this.position = position;
        this.color = color;
    }

    move(newPosition: Position): void {
        this.position = newPosition;
    }
}

export class Pawn extends ChessPiece {
    constructor(position: Position, color: "white" | "black") {
        super("Pawn", position, color);
    }

    isValidMove(newPosition: Position): boolean {
        const direction = this.color === "white" ? 1 : -1;
        return (
            newPosition.col === this.position.col &&
            newPosition.row === this.position.row + direction
        );
    }
}

export class Bishop extends ChessPiece {
    constructor(position: Position, color: "white" | "black") {
        super("Bishop", position, color)
    }

    isValidMove(newPosition: Position): boolean {
        const rowDiff = Math.abs(newPosition.row - this.position.row);
        const colDiff = Math.abs(newPosition.col - this.position.col);

        return rowDiff === colDiff;
    }
}

export class Knight extends ChessPiece {
    constructor(position: Position, color: "white" | "black") {
        super("Knight", position, color)
    }

    isValidMove(newPosition: Position): boolean {
        const rowDiff = Math.abs(newPosition.row - this.position.row)
        const colDiff = Math.abs(newPosition.col - this.position.col);
        return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)
    }
}

export class Rook extends ChessPiece {
    constructor(position: Position, color: "white" | "black") {
        super("Rook", position, color)
    }

    isValidMove(newPosition: Position): boolean {
        const rowDiff = Math.abs(newPosition.row - this.position.row)
        const colDiff = Math.abs(newPosition.col - this.position.col);
        return (rowDiff === 0 && colDiff !== 0) || (rowDiff !== 0 && colDiff === 0) 
    }
}

