// -----------------------------    Call() & apply() Method     -----------------------------

//Its a predefined method of a javaScript. An Object can use a method belong to another object.
//Diff btwn Call and apply method :
//                                call() take argument separately, and apply() take argument as a array 

const youtuber1 ={
    name :'Code with Biplab',
    content :'Programming',
    feature :function(rating){
        console.log(`Plz subscribe my ${this.content} ${this.name}`);
    }
}

const youtuber2 ={
    name :"Math with Palash",
    content :"Teaching Channel"
}

//Using Call()
youtuber1.feature.call(youtuber2,5);

//Using apply()
youtuber1.feature.apply(youtuber2,[5]);