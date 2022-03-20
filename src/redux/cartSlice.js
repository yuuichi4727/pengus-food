import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:  [],
    totalQuantity: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingIndex = state.products.findIndex(
                (product) => product.id === action.payload.id
            )

            if (existingIndex >= 0) {
                state.products[existingIndex].amount += 1
            } else {
                let tempProductItem = action.payload;
                state.products.push(tempProductItem);
                state.totalQuantity += 1;
            }
            
        },
        decreaseAmount: (state, action) => {
            const productIndex = state.products.findIndex(
                product => product.id === action.payload.id
            )
            if (state.products[productIndex].amount > 1) {
                state.products[productIndex].amount -= 1;
            }
            
        },
        increaseAmount: (state, action) => {
            const existingIndex = state.products.findIndex(
                (product) => product.id === action.payload.id
            )

            if (existingIndex >= 0) {
                state.products[existingIndex].amount += 1
            }
            
        },
        removeProduct: (state, action) => {
            state.products.map((product) => {
                if (product.id === action.payload.id) {
                    const newProducts = state.products.filter(
                        (item) => item.id !== product.id
                    )

                    state.products = newProducts;
                    state.totalQuantity -= 1;

                }
            })
            
            return state;
        },
        getTotals: (state, action) => {
            let { total } = state.products.reduce(
                (cartTotal, product) => {
                    const { price, amount } = product;
                    const productTotal = price * amount;

                    cartTotal.total += productTotal

                    return cartTotal
                },
                {
                    total: 0
                }
            )
            total = parseFloat(total.toFixed(2))
            state.totalPrice = total
        },
        checkOut: (state, action) => {
            state.products = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})

export const { addProduct, decreaseAmount, increaseAmount, removeProduct, getTotals, checkOut } = cartSlice.actions
export default cartSlice.reducer