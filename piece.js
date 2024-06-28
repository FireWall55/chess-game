export default class Piece{
    constructor(y, x, pieceHTML, color, piece){
        this.y = y;
        this.x = x;
        this.pieceHTML = pieceHTML;
        this.color = color;
        this.piece = piece;
        this.moves = 0

    }
    //'<div id="pawn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg></div>'

    get html(){
        return this.pieceHTML;
    }
    sety(y){
        this.y = y;
    }

    setx(col){
        this.x = col;
    }

    isValidMove(newLoc, oldLoc, isCapturing, allPieces, whiteMove) {//newLoc and oldLoc are squares

        if(this.color=="black" && whiteMove){
            return false;
        }
        if(this.color=="white" && !whiteMove){
            return false;
        }


        let canMove = true;
        let newY = parseInt(newLoc.getAttribute("y"));
        let newX = parseInt(newLoc.getAttribute("x"));
        let oldY = parseInt(oldLoc.getAttribute("y"));
        let oldX = parseInt(oldLoc.getAttribute("x"));

        

        //do this for every piece
        /*
        allPieces.forEach(piece => {
            if((piece.gety > oldY) && (piece.gety < newY)){
                console.log("things just happened");
                canMove = false;
            }
        });*/

        if(!canMove){
            return false;
        }

        console.log(this.moves);

        if(this.piece=="pawn" && isCapturing==false){//checks pawn movement (no capturing)
            console.log("pawn just moved");
            if(this.color=="black"){
                if(((this.moves<1 && newY == oldY-2) || newY==oldY-1) && newX == oldX){
                    if(this.checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, "pawn")){
                        console.log("There is a piece in your path");
                        return false;
                    }
                    this.moves+=1;
                    return true;
                }else{
                    return false;
                } 
            }
            
            if(((this.moves<1 && newY == oldY+2) || newY==oldY+1) && newX == oldX){
                if(this.checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, "pawn")){
                    console.log("There is a piece in your path");
                    return false;
                }
                this.moves+=1;
                return true;
            }else{
                return false;
            }
        }
        if(this.piece=="pawn" && isCapturing==true){ //checks pawn capturing movement
            console.log("pawn just captured");
            if(this.color=="black"){
                if(newY==oldY-1 && (newX==oldX+1 || newX==oldX-1)){
                    this.moves+=1
                    return true;
                }else{
                    return false;
                }
            }


            if(newY==oldY+1 && (newX==oldX+1 || newX==oldX-1)){
                this.moves+=1
                return true;
            }else{
                return false;
            }
        }
        if(this.piece=="rook"){
            console.log("rook just moved");

            if(newX==oldX || newY==oldY){//horizontal or vertical
                if(this.checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, "rook")){//if there is a piece in the path
                    console.log("there is a piece in your path");
                    return false;
                }
                this.moves+=1;
                return true;
            }
            else{
                return false;
            }
        }
        if(this.piece=="knight"){
            console.log("knight just moved");
            if((Math.abs(newX-oldX)==2 && Math.abs(newY-oldY)==1 )|| (Math.abs(newY-oldY)==2 && Math.abs(newX-oldX)==1 )){
                this.moves+=1;
                return true;
            }else{
                return false;
            }
        }
        if(this.piece=="bishop"){
            console.log("bishop just moved");
            if(Math.abs(newX-oldX)==Math.abs(newY-oldY)){
                if(this.checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, "bishop")){//if there is a piece in the path
                    console.log("there is a piece in your path");
                    return false;
                }
                this.moves+=1;
                return true;
            }else{
                return false;
            }
        }
        if(this.piece=="queen"){
            console.log("queen just moved");
            if(newX==oldX || newY==oldY){//horizontal or vertical
                if(this.checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, "rook")){//if there is a piece in the path
                    console.log("there is a piece in your path");
                    return false;
                }
                this.moves+=1;
                return true;
            }
            else if(Math.abs(newX-oldX)==Math.abs(newY-oldY)){
                if(this.checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, "bishop")){//if there is a piece in the path
                    console.log("there is a piece in your path");
                    return false;
                }
                this.moves+=1;
                return true;
            }else{
                return false;
            }
        }
        if(this.piece=="king"){
            console.log("king just moved");
            if(Math.abs(newX-oldX)<=1 && Math.abs(newY-oldY)<=1){
                this.moves+=1;
                return true
            }else{
                return false;
            }
        }
        return false;
    }


    checkIfPieceInPath(allPieces, newX, newY, oldX, oldY, pieceType){
        let isInPath = false;
        if(pieceType=="rook"){
            if(newY>oldY && newX==oldX){//checks up
                for(let i = oldY+1; i<newY; i++){
                    allPieces.forEach(piece => {
                        if(piece.y==i && piece.x==oldX){
                            isInPath=true;
                        }
                    });
                }
            }else if(newY<oldY && newX==oldX){//checks down
                for(let i = oldY-1; i>newY; i--){
                    allPieces.forEach(piece => {
                        if(piece.y==i && piece.x==oldX){
                            isInPath=true;
                        }
                    });
                }
            }else if(newY==oldY && newX>oldX){//checks right 
                for(let i = oldX+1; i<newX; i++){
                    allPieces.forEach(piece => {
                        if(piece.x==i && piece.y==oldY){
                            isInPath=true;
                        }
                    });
                }
            }else if(newY==oldY && newX<oldX){//checks left
                for(let i = oldX-1; i>newX; i--){
                    allPieces.forEach(piece => {
                        if(piece.x==i && piece.y==oldY){
                            isInPath=true;
                        }
                    });
                }
            }
        }
        if(pieceType=="pawn"){
            if((newY-oldY)==2){
                allPieces.forEach(piece => {
                    if(piece.y==oldY+1 && piece.x==oldX){
                        isInPath=true;
                    }
                })
            }
        }
        if(pieceType=="bishop"){//
            if(newY-oldY > 0){//moving up
                if(newX-oldX > 0){//moving up and right
                    for(let i = oldX+1; i<newX; i++){
                        allPieces.forEach(piece => {
                            if(piece.x==i && piece.y==oldY+(i-oldX)){
                                isInPath = true;
                            }
                        })
                    }
                }else{//moving up and left
                    for(let i = oldX-1; i>newX; i--){
                        allPieces.forEach(piece => {
                            if(piece.x==i && piece.y==oldY + (-1 * (i-oldX))){
                                isInPath = true;
                            }
                        })
                    }
                }
            }else{//moving down
                if(newX-oldX > 0){//moving down and right
                    for(let i = oldX+1; i<newX; i++){
                        allPieces.forEach(piece => {
                            if(piece.x==i && piece.y==oldY-(i-oldX)){
                                isInPath = true;
                            }
                        })
                    }
                }else{//moving down and left
                    for(let i = oldX-1; i>newX; i--){
                        allPieces.forEach(piece => {
                            if(piece.x==i && piece.y==oldY - (-1 * (i-oldX))){
                                isInPath = true;
                            }
                        })
                    }
                }
            }
        }



        return isInPath;
    }


    numOfValidMoves(allPieces){
        
    }
    




    
}




