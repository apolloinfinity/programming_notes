function DNAStrand(dna){
    //empty array where the I want the code to go
    var output = [];

    //Created an if/else statement for conditions of each letter.
    if(dna) {
        //for loop will iterate through each DNA letter
        for (var i = 0; i < dna.length; i++) {
            //If else goes through each dna[i] letter and returns the DNA corresponding letter.
            if (dna[i] === 'T') {
                output.push('A')
            } else if (dna[i] === 'A') {
                output.push('T');
            } else if (dna[i] === "G") {
                output.push("C")
            } else if (dna[i] === "C") {
                output.push("G");
            }
        }
    }
    return output.join('');
}

DNAStrand("AAAA");