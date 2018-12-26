   const inventors = [{
           first: 'Albert',
           last: 'Einstein',
           year: 1879,
           passed: 1955
       },
       {
           first: 'Isaac',
           last: 'Newton',
           year: 1643,
           passed: 1727
       },
       {
           first: 'Galileo',
           last: 'Galilei',
           year: 1564,
           passed: 1642
       },
       {
           first: 'Marie',
           last: 'Curie',
           year: 1867,
           passed: 1934
       },
       {
           first: 'Johannes',
           last: 'Kepler',
           year: 1571,
           passed: 1630
       },
       {
           first: 'Nicolaus',
           last: 'Copernicus',
           year: 1473,
           passed: 1543
       },
       {
           first: 'Max',
           last: 'Planck',
           year: 1858,
           passed: 1947
       },
   ];

   const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick', 'Becher, Henry',
       'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Bechley, Robert',
       'Benenson, Peter', 'ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
       'Benson, Leana', 'Bent, Silas', 'Bentsen, Loyd', 'Bevel, Kna', 'Biden, Joseph', 'Bierce, Ambrose',
       'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrel, Augustine', 'Black, Elk', 'Blair, Robert',
       'Blair, Tony', 'Blake, William'
   ]

   //1.  filter - the list of inventors for those who were born in the 1500's
   // const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
   // console.table(fifteen);

   //2.  map() - give us an array of the inventory first and last names
   //  const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
   //  console.log(fullName);

   //    3.  Sort - Sort inventors by birthdate,oldest to youngest
   //    const birthOfInventors = inventors.sort((a, b) =>  a.year > b.year ? 1 : -1);
   //    console.table(birthOfInventors);

   //4.  Reduce - How many years did all the inventors live? 

   // const getAllYears = inventors.reduce((total, inventor) => {
   //     return total + (inventor.passed - inventor.year)
   // }, 0);
   // console.log(getAllYears);

   //5. - Sort the inventors by years lived
   //    const oldest = inventors.sort((a, b) => {
   //        if (a.passed - a.year > b.passed - b.year) {
   //            return -1;
   //        }
   //    })
   //    const oldest = inventors.sort(function(a, b){
   //        return a.passed - a.year > b.passed - b.year ? -1 : 1;
   //    })
   //    console.table(oldest);

   //    6. - Create a list of Boulevards in Paris that contain 'de' anywhere in the name 
   //  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

   //    const category = document.querySelector(".mw-category");
   //    const links = Array.from(category.querySelectorAll("a"));
   //    const de = links
   //              .map(link => link.textContent);
   //               .filter(boulevard => boulevard.includes('de'));
   //           console.log(de);

   //    7 - Sort - Sort the people alphabetically by last name
   //             7.1

    //  const alpha = people.sort((lastOne, nextOne) => {
    //      const [alast, afirst] = lastOne.split(', ');
    //      const [blast, bfirst] = nextOne.split(', ');
    //      return alast < blast ? -1 : 1;
    //   })
    //   console.log(alpha);

   //8 - Reduce Exercise

//    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
//    const transportation = data.reduce(function(obj, item, i){
//        if(!obj[item]){
//             obj[item] = 0;
//             console.log('krug broj , ' + i);
//             console.log();
            
//        }
//            obj[item]++ ;
//            console.log(obj);   
          
//        return obj;     
//    }, {});

//    console.log(transportation);
   

   //Sum up the instances of each of these