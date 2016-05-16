String.prototype.truncate = function(capLength){

	var trunc = '..';
	var output = this;

	if(typeof capLength !== 'number'){
		console.log('Arg must be a number type. No truncation made.');
		return output;
	}
	
	if(output.length > capLength){
		

			if(output[capLength-1] === ' '){ //dont trunc after an empty space, looks ugly
							capLength -= 1;
							
						}

						if(output[capLength-2] === ' ' || output[capLength-3] === ' '){ // dont trunc on a single/ double letter. looks ugly
							if(output[capLength-2] === ' '){
								capLength -= 2;
							}else{
								capLength -= 3;
							}
							
							}

			output = output.substring(0, capLength) + trunc;

	}
	else if(output.length === capLength){
		return output;
	}

	return output;
}
