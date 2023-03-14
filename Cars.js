class Cars {
    img;
    name;
    price;
    addcar;

    constructor(img, name, price,addcar) {
        this._img = img;
        this._name = name;
        this._price = price;
        this._addcar = addcar;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get addcar() {
        return this._addcar;
    }

    set addcar(value) {
        this._addcar = value;
    }
}
