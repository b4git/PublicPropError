class B{};
export class A extends B{

    prop2 = [{
        k0: "v0",
        k1: {k2: this.publicProp},
    }];

    constructor(public publicProp = 20){
        super();        
    }
}
