console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
//console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  //console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// the i<4 needs to be changed to i<6 to add the extra numbers
for (let i=0; i<6; i++) {  
 //  console.log( i );
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// the i=0 in the code needs to change to i=3
for (let i=3; i<6; i++){
//console.log( i );
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// need to change i++ to += 2 to skip each number...
for (let i=2; i<11; i += 2){
//console.log( i );
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
for ( let i=5; i>-1; i -= 1){
console.log( i );
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for ( let i=0; i<stars.length; i++){
console.log( stars [i] );
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
i =0;

while( i < 5 )
{console.log( stars [ i ] );
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
i =0;

while( i < 5 )
{console.log( i );
  i++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
i =10;

while( i > 4 )
{console.log( i );
  i-=1;
}
