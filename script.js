import Piece from "./piece.js"

const board = document.querySelector(".board");
const text = document.querySelector(".text");
const checkText = document.querySelector(".check");
const pawn = '<div id="pawn" class="piece"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg></div>'
const rook = '<div id="rook" class="piece"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>'
const knight = '<div id="knight" class="piece"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z"/></svg></div>'
const bishop = '<div id="bishop" class="piece"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg></div>'
const queen = '<div id="queen" class="piece"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg></div>'
const king = '<div id="pawn" class="piece"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>'
const pieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, '', pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
];
const pieces2 = [
    '', '', '', '', '', '', queen, '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    rook, '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', king,
    rook, rook, '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', pawn,
];
const knightx = [-2, -2, -1, -1, 1, 1, 2, 2];
const knighty = [-1, 1, 2, -2, 2, -2, 1, -1];
const colorSwap = { "white": "black",
                    "black": "white"};


let selectedPieceHTML, selectedPiece;
let allPieces = [];
let move = 0;
let colorInCheck = "";
let whiteMove = true; //if true, white's turn, if false, black's turn
let checkingPiece = null;
createBoard();



//Make "legal moves" thing

function createBoard(){
    pieces2.forEach((startPiece, i )=> {
        const square = document.createElement('div');
        square.classList.add('square');
        let column = (1+(i%8)).toString();
        let row = (8-Math.floor(i/8)).toString();
        square.setAttribute("x", column);
        square.setAttribute("y", row);
        if ((i%8 + Math.floor(i/8))%2 == 1) {
            square.classList.add('dark');
        }else{
            square.classList.add('light');
        }
        
        //square.innerHTML = startPiece;
        
        let piece;
        if(!(startPiece === '')){ //if there is actually a piece there
            let color;
            if(row==1 || row==2 || row==4){
                color = "black";
            }
            if(row==7 || row==8 || row==3 || row==5){
                color = "white";
            }
            let pieceType;
            if(startPiece == pawn) { pieceType="pawn"; } if(startPiece == rook) { pieceType="rook"; } 
            if(startPiece == knight) { pieceType="knight"; } if(startPiece == bishop) { pieceType="bishop"; } 
            if(startPiece == queen) { pieceType="queen"; } if(startPiece == king) { pieceType="king"; } 
            piece = new Piece(row, column, startPiece, color, pieceType);
            allPieces.push(piece);
            square.innerHTML = piece.html;
            if(color=="white"){
                square.firstChild.firstChild.classList.add("white");
            }else{
                square.firstChild.firstChild.classList.add("black");
            }
        }
            board.append(square);
    })
    
    const allSquares = document.querySelectorAll(".square");
    //allPieces = document.querySelectorAll(".piece");

    allSquares.forEach(square => {
        square.addEventListener('click', click);
    })
}

function click(e){
    if(e.target.classList[0]=="piece"){
        if(selectedPieceHTML == e.target){//if you click the same piece again, reset the selectedPiece
            selectedPieceHTML.parentElement.classList.remove("selected");
            selectedPieceHTML = null;
            selectedPiece = null;
            return;
        }
        if(selectedPieceHTML!= null){//if there is already a selectedPieceHTML
            if(selectedPieceHTML.firstChild.classList[0] != e.target.firstChild.classList[0]){//if you click a piece of the opposite color
                selectedPieceHTML.parentElement.classList.remove("selected");
                capture(selectedPiece, e.target.parentElement, selectedPieceHTML.parentElement);
                return;
            }else{
                selectedPieceHTML.parentElement.classList.remove("selected"); //switches the selected piece
            }
        }
        allPieces.forEach(piece => {//finds the correct piece and stores it
            if(piece.x == e.target.parentElement.getAttribute("x") && piece.y == e.target.parentElement.getAttribute("y")){
                selectedPieceHTML = e.target;
                selectedPiece = piece;
                console.log(selectedPiece.x, selectedPiece.y, selectedPiece.piece);
            }
        })
        
        selectedPieceHTML.parentElement.classList.add("selected");
    }
    else if(e.target.classList[0] == "square" && e.target.firstChild == null){//empty square
        if(selectedPieceHTML!=null){//if you click a tile, and you have another piece selected
            selectedPieceHTML.parentElement.classList.remove("selected");
            movePiece(selectedPiece, e.target, selectedPieceHTML.parentElement);
        }
    }
}


function movePiece(piece, newSquare, oldSquare){
    //console.log(piece.html);

    if(piece.isValidMove(newSquare.getAttribute("x"), newSquare.getAttribute("y"), oldSquare.getAttribute("x"), oldSquare.getAttribute("y"), false, allPieces, whiteMove)){
        
        move+=1;
        newSquare.innerHTML = piece.html;
        oldSquare.innerHTML = "";
        piece.sety(newSquare.getAttribute("y"));
        piece.setx(newSquare.getAttribute("x"));

        
        if(piece.color=="white"){
            newSquare.firstChild.firstChild.classList.add("white");
        }else{
            newSquare.firstChild.firstChild.classList.add("black");
        }
        if(check(allPieces)){
            checkText.innerText = "IN CHECK";
            if(checkmate(allPieces)){
                checkText.innerText = `CHECKMATE BY ${colorSwap[colorInCheck]}`;
                console.log(colorSwap[colorInCheck]);
            }

        }else{
            checkText.innerText = "NOT IN CHECK";
        }

        whiteMove = !whiteMove;
        
        if(whiteMove){
            text.innerText = "It's white's move";
        }else{
            text.innerText = "It's black's move";
        }

    }

        selectedPieceHTML = null;
        selectedPiece = null;
}

function capture(piece, newSquare, oldSquare){


    if(piece.isValidMove(newSquare.getAttribute("x"), newSquare.getAttribute("y"), oldSquare.getAttribute("x"), oldSquare.getAttribute("y"), true, allPieces, whiteMove)){


        move+=1;
        allPieces.forEach((piece_i, i) => {//goes through all the pieces to find the one you want to delete
            if(piece_i.y==newSquare.getAttribute("y") && piece_i.x == newSquare.getAttribute("x")){
                allPieces.splice(i, 1);
                return;
            }
        })
        newSquare.innerHTML = piece.html;
        oldSquare.innerHTML = "";
        piece.sety(newSquare.getAttribute("y"));
        piece.setx(newSquare.getAttribute("x"));

        if(piece.color=="white"){
            newSquare.firstChild.firstChild.classList.add("white");
        }else{
            newSquare.firstChild.firstChild.classList.add("black");
        }
        if(check(allPieces)){
            checkText.innerText = "IN CHECK";
            if(checkmate(allPieces)){
                checkText.innerText = `CHECKMATE BY ${colorSwap[colorInCheck]}`;
                console.log(colorSwap[colorInCheck]);
            }

        }else{
            checkText.innerText = "NOT IN CHECK";
        }

        whiteMove = !whiteMove;

        if(whiteMove){
            text.innerText = "It's white's move";
        }else{
            text.innerText = "It's black's move";
        }


    }
        selectedPieceHTML = null;
        selectedPiece = null;
 
}


function check(allPieces){
    let inCheck = false;
    allPieces.forEach(piece => {
        let x = parseInt(piece.x);
        let y = parseInt(piece.y);
        let type = piece.piece;
        if(type=="pawn"){
            if(piece.color=="white"){
                allPieces.forEach(piece2 => {
                    if((piece2.x==parseInt(x)+1 || piece2.x==x-1) && (piece2.y==parseInt(y)+1) && piece2.piece=="king"){
                        colorInCheck = "black";
                        console.log("CHECK");
                        checkingPiece = piece;
                        inCheck=true;
                        return;
                    }
                });
            }else{
                allPieces.forEach(piece2 => {
                    if((piece2.x==parseInt(x)+1 || piece2.x==x-1) && (piece2.y==y-1) && piece2.piece=="king"){
                        colorInCheck = "white";
                        inCheck=true;
                        checkingPiece = piece;
                        console.log("CHECK");
                        return;
                    }
                });
            }
        }
        if(type=="bishop" || type=="queen"){
            for(let i = x+1; i<=8; i++){//checks towards the right
                if((findPiece(allPieces, i, y+(i-x)) != null && findPiece(allPieces, i, y+(i-x)).piece == "king" && findPiece(allPieces, i, y+(i-x)).color != piece.color && !piece.checkIfPieceInPath(allPieces, i, y+(i-x), x, y, "bishop")) || 
                (findPiece(allPieces, i, y-(i-x)) != null && findPiece(allPieces, i, y-(i-x)).piece == "king" && findPiece(allPieces, i, y-(i-x)).color != piece.color && !piece.checkIfPieceInPath(allPieces, i, y-(i-x), x, y, "bishop"))){
                    if(findPiece(allPieces, i, y+(i-x)) != null){
                        colorInCheck = findPiece(allPieces, i, y+(i-x)).color;
                    }
                    if(findPiece(allPieces, i, y-(i-x)) != null){
                        colorInCheck = findPiece(allPieces, i, y-(i-x)).color;
                    }
                    inCheck=true;
                    checkingPiece = piece;
                    console.log("check");
                    return;
                }
            }
            for(let i = x-1; i>=1; i--){//checks towards the left
                if((findPiece(allPieces, i, y+(i-x)) != null && findPiece(allPieces, i, y+(i-x)).piece == "king" && findPiece(allPieces, i, y+(i-x)).color != piece.color && !piece.checkIfPieceInPath(allPieces, i, y+(i-x), x, y, "bishop")) || 
                (findPiece(allPieces, i, y-(i-x)) != null && findPiece(allPieces, i, y-(i-x)).piece == "king" && findPiece(allPieces, i, y-(i-x)).color != piece.color && !piece.checkIfPieceInPath(allPieces, i, y-(i-x), x, y, "bishop"))){
                    if(findPiece(allPieces, i, y+(i-x)) != null){
                        colorInCheck = findPiece(allPieces, i, y+(i-x)).color;
                    }
                    if(findPiece(allPieces, i, y-(i-x)) != null){
                        colorInCheck = findPiece(allPieces, i, y-(i-x)).color;
                    }
                    inCheck=true;
                    checkingPiece = piece;
                    console.log("check");
                    return;
                }
            }
        }
        if(type=="rook" || type=="queen"){
            for(let i = 1; i<=8; i++){
                if(findPiece(allPieces, x, i) != null && findPiece(allPieces, x, i).piece == "king" && findPiece(allPieces, x, i).color != piece.color && !piece.checkIfPieceInPath(allPieces, x, i, x, y, "rook")||
                findPiece(allPieces, i, y) != null && findPiece(allPieces, i, y).piece == "king" && findPiece(allPieces, i, y).color != piece.color && !piece.checkIfPieceInPath(allPieces, i, y, x, y, "rook")){
                    if(findPiece(allPieces, x, i) != null){
                        colorInCheck = findPiece(allPieces, x, i).color;
                    }
                    if(findPiece(allPieces, i, y) != null){
                        colorInCheck = findPiece(allPieces, i, y).color
                    }
                    inCheck = true;
                    checkingPiece = piece;
                    console.log("check");
                    return;
                }
            }
        }
        if(type=="knight"){
            knightx.forEach((xValue, i) => {
                if(findPiece(allPieces, x+xValue, y+knighty[i]) != null && findPiece(allPieces, x+xValue, y+knighty[i]).piece == "king" && findPiece(allPieces, x+xValue, y+knighty[i]).color != piece.color && !piece.checkIfPieceInPath(allPieces, x+xValue, y+knighty[i], x, y, "knight")){
                    colorInCheck = findPiece(allPieces, x+xValue, y+knighty[i]).color;
                    inCheck = true;
                    checkingPiece = piece;
                    console.log("check");
                    return;
                }
            });
        }
    });
    return inCheck;
}

//attempts to find a piece at a specified x and y and return it. If no piece is found, returns null
function findPiece(allPieces, x, y){
    let foundPiece;
    allPieces.forEach(piece => {
        if(piece.x == x && piece.y == y){
            foundPiece = piece;
        }
    });
    if(foundPiece != null){
        return foundPiece;
    }
    return null;
}


function checkmate(allPieces){//returns the color that won, if not checkmate returns ""
    let checkmate = false;
    let piecesAroundKing = 0, x, y;
    allPieces.forEach(piece => {
        piecesAroundKing = 0;
        if(piece.piece == "king" && piece.color=="black"){
            x = parseInt(piece.x);
            y = parseInt(piece.y);


            let blocking = false;
            allPieces.forEach(piece2 => {
                //checks if something can block the check
                if(piece2.color != checkingPiece.color && checkingPiece.piece != "knight" && piece2.piece != "king"){
                    //the piece might be able to block the check
                    if(checkingPiece.piece == "rook"){
                        if(checkingPiece.x == piece.x){
                            //the piece was checking vertically
                            if(checkingPiece.y>piece.y){
                                //if the king is lower than the checking piece
                                for(let i = parseInt(piece.y) + 1; i<checkingPiece.y; i++){
                                    //runs up from the king 
                                    if(piece2.isValidMove(checkingPiece.x, i.toString(), piece2.x, piece2.y, false, allPieces, !whiteMove)){
                                        blocking = true;
                                        console.log("blocking", blocking);
                                    }
                                }
                            }else{
                                //if the king is higher than the checking piece
                                for(let i = parseInt(checkingPiece.y) + 1; i<parseInt(piece.y); i++){
                                    //runs up  from the ckecing piece
                                    if(piece2.isValidMove(checkingPiece.x, i.toString(), piece2.x, piece2.y, false, allPieces, !whiteMove)){
                                        blocking = true;
                                        console.log("blocking", blocking, piece2);
                                    }
                                }
                            }

                        }else if(checkingPiece.y == piece.y){
                            //the piece was checking horizontially
                            if(checkingPiece.x>piece.x){
                                //king is to the left
                                for(let i = parseInt(piece.x) + 1; i<parseInt(checkingPiece.x); i++){
                                    if(piece2.isValidMove(i, piece.y, piece2.x, piece2.y, false, allPieces, !whiteMove)){
                                        blocking = true;
                                        console.log("blocking", blocking, piece2);
                                    }
                                }
                            }else{
                                //king is to the right
                                for(let i = parseInt(checkingPiece.x) + 1; i<parseInt(piece.x); i++){
                                    if(piece2.isValidMove(i, piece.y, piece2.x, piece2.y, false, allPieces, !whiteMove)){
                                        blocking = true;
                                        console.log("blocking", blocking, piece2);
                                    }
                                }
                            }
                        }
                    }else if(checkingPiece.piece == "bishop"){
                        
                    }
                }
            });






            if(blocking){
                return false;
            }
            let skip = false;
            //checks around the piece
            for(let i = -1; i<=1; i++){
                for(let j = -1; j<=1; j++){
                    skip = false;
                    if(findPiece(allPieces, x+i, y+j)!=null && findPiece(allPieces, x+i, y+j).color == piece.color){
                        piecesAroundKing++;
                        continue;
                    }
                    
                    if(x+i<=8 && x+i>=1 && y+j<=8 && y+j>=1){//if the square is in the board
                        console.log("x", x+i, "y", y+j);
                        allPieces.forEach(piece2 => {
                            //runs through every piece to see if anything can attack the surrounding square
                            if(whiteMove){//white is the one trying to checkmate
                                if(piece2.color != piece.color && piece2.isValidMove(x+i, y+j, piece2.x, piece2.y, false, allPieces, whiteMove)){
                                    piecesAroundKing++;
                                    console.log("SMTH IS BLOCKING SMTH");
                                    skip = true;
                                }
                            }else{
                                if(piece2.color != piece.color && piece2.isValidMove(x+i, y+j, piece2.x, piece2.y, false, allPieces, !whiteMove)){
                                    piecesAroundKing++;
                                    skip = true;
                                }
                            }
                            if(skip){
                                return;
                            }
                        });
                    }
                }
            }
            console.log("piecesAroundKing", piece.color, piecesAroundKing, 2);
            let piecesNeeded;
            if((y==8 || y==1) && (x==1 || x==8)){
                piecesNeeded = 4;
            }else if(y==8 || y==1 || x==1 || x==8){
                piecesNeeded = 6;
            }else{
                piecesNeeded = 9;
            }
            console.log("piecesNeeded", piecesNeeded, "piecesAroundKing", piecesAroundKing);

            


            if(piecesAroundKing==piecesNeeded){
                console.log("CHECKMATE");
                checkmate = true;
                if(check(allPieces)){
                    return checkmate;
                }
            }
        }else if(piece.piece == "king" && piece.color == "white"){
            ///////////////////////////////////////////////////////////////////////////////////
        }
    });
    


    if(check(allPieces)){
        return checkmate;
    }

}