var state = {
    flour: 400,
    ratios: {
        water: .75,
        yeast: .005,
        salt: .02,
    }
}

var computed = {
    get flour() {
        return state.flour;
    },
    get water() {
        return state.flour * state.ratios.water;
    },
    get yeast() {
        return state.flour * state.ratios.yeast;
    },
    get salt() {
        return state.flour * state.ratios.salt;
    }
}

var actons = {
    updateFlourQty: (qty) => {
        state.flour = qty;
    }
}

var FlourIngredient = {
    view: function ({ }) {
        return m("div.row", [
            m(".col", "Harina"),
            m("input[type=number].col text-center", {
                value: state.flour,
                oninput: (e) => actons.updateFlourQty(e.target.value)
            }),
            m(".col text-center text-muted", 100 + " %"),
        ]);
    }
}

var ComputedIngredient = {
    view: function ({ attrs }) {
        return m("div.row", [
            m(".col", attrs.name),
            m(".col text-center", computed[attrs.ingredient] + " gr"),
            m(".col text-center text-muted", state.ratios[attrs.ingredient] * 100 + " %"),
        ]);
    }
}

var Calculator = {
    view: function () {
        return m("div.card", { style: "width: 40rem;" }, [
            m("div.card-body", [
                m("h5.card-title text-center", "Breadculator"),
                m("p.card-text text-center", "Calculadora de recetas de pan"),
                // Ingredients
                m("ul.list-group list-group-flush",
                    m("li.list-group-item",
                        m(FlourIngredient)),
                    m("li.list-group-item",
                        m(ComputedIngredient, { name: "Agua", ingredient: "water" })),
                    m("li.list-group-item",
                        m(ComputedIngredient, { name: "Levadura", ingredient: "yeast" })),
                    m("li.list-group-item",
                        m(ComputedIngredient, { name: "Sal", ingredient: "salt" })),
                )
            ])
        ]);
    }
}


var Main = {
    view: function () {
        return m("div.container pt-3",
            m("div.row justify-content-md-center",
                m(Calculator)));
    }
}

var root = document.body;
m.mount(root, Main);