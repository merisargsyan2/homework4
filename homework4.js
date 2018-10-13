
const trianglestars = function(charr,num){
  let base = "";
    while(num > 0){
    base = base + charr;
    num--;
    }
    return base;
};

const triangle = function(n){
  let starcount = 2*n - 1;
  let spacecount = 0;
  while(n>0){
    console.log(trianglestars(" ",spacecount) + trianglestars("*",starcount));
    n--;
    starcount = 2*n - 1;
    spacecount++;
  }
};
  triangle(4);




const multytosingle = function(arr){
let base=[];
let parentindex = 0;
while(parentindex < arr.length) {
let childarr = arr[parentindex];
let childindex = 0;
while(childindex < childarr.length){
  base[base.length] = childarr[childindex];
  childindex++;
}
parentindex ++;
} 
return base;
};
console.log(multytosingle([[3,4,5],[7,66,8]]));




const ff = function(arr,bool){
  let index = 0;
  let max = arr[0];
  let min = arr[0];
  let minMax = arr[0];
while(arr.length > index){
  if(arr[index] > minMax){
    if(bool){
      minMax = arr[index]
    } else {
      minMax = minMax;
    }
  }
index = index+1;
}
return minMax;
};

console.log(ff([2,-44,6,87,90,4],true));




const forEach = function(arr, func){
let index = 0;
let l = arr.length;

while(l > 0){
  func(arr[index]);
  index ++;
  l --;
} 
};

forEach([1, 2, 3, 4],function(val){
  console.log(val);
  });




const sum = function(arr){
  let arrsum = 0;
  let index = 0;
  while(index <= arr.length-1){
arrsum = arrsum + arr[index];
index = index + 1;
  }
return arrsum;
};
console.log(sum([4,4,2]));




const reverse = function(string){
	let revstr = "";
	let index = string.length-1;
	while(index >= 0){
		revstr = revstr + string[index];
		index = index-1;
	}
	return revstr;
};
console.log(reverse("Armenia"));




const checkerboard = function(chaar,num){
  let base = "";
  while(num > 0){
    base = base + chaar;
    num--;
  } 
  return base;
}

const triaangle = function(n){
    let starcount = n;
    let spacecount =0;
    while(n > 0){
      spacecount ++;
      if (spacecount % 2 !== 0){
            console.log(checkerboard("* ", starcount));
      }else{
            console.log(" " + checkerboard("* ", starcount));
      }
      n --;
    }
}
var a = checkerboard("*", 5);
 triaangle(5)

