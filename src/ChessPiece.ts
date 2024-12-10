
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

