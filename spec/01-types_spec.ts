describe('variables and constants and stuff', () => {
    describe('declaring variables', () => {
        it('using let to create a binding', () => {
            let name;

            name = 'Joe';
            expect(name).toBe('Joe');

            name = 11;

            expect(name).toBe(11);
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = 'Joe'; //Union Type.

            //name = 'Joe';
            expect(name).toBe('Joe');

            name = 11;

            expect(name).toBe(11);
        });
        it('declaring constants', () => {
            const PI = 3.1415927;
            const FAVORITE_NUMBERS = [9, 22, 108];
            // FAVORITE_NUMBERS = [];
            FAVORITE_NUMBERS[0] = 10;
            const MOVIE = {
                title: 'the force awakens',
                director: 'Abrams'
            };
            MOVIE.director = 'Johnson';
        });
        it('var is till there, but it stinks and should not be used', () => {
            if (true) {
                var name = 'Fido'; //this is the thing you should not do
            }
            expect(name).toBe('Fido');
        });
    });
    describe('strings', () => {
        it('delimiting', () => {
            let first = 'Joe',
                last = "Schmidt";
            expect("Joe").toBe(first);

            let msg = "She told \"Get Lost!\"";
            let msg2 = 'She told me "Get Lost!"';

            let story = `Chapter 1.
        
It was a dark and stormy night`;
            console.log(story);

            let fullName = `That is ${last}, ${first}`;
            expect(fullName).toBe('That is Schmidt, Joe');
        });

    });
    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12;   // number
            let n2 = 1.3;  // still a number
            let n3 = 0xff; //  still a number, but hexadecimal (base 16)
            let n4 = 0b00101; // still a numbher but in binary.
            let n5 = 0o744; // octal. who the heck uses that?
            //typescript thing
            const salary = 1_000_000;



        });

    });