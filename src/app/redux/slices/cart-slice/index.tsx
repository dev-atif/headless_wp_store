import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const { id, selectedSize, selectedColor, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );
      if (existingItem) {
        existingItem.quantity += quantity || 0; // Fallback to 0 if undefined
      } else {
        state.items.push({
          ...action.payload,
          quantity: quantity || 1,
        }); // Ensure quantity is set
      }
      console.log("Cart items after adding:", current(state.items));
    },

    
    increaseItem: (state, action: PayloadAction<Product>) => {
      const { id, selectedSize, selectedColor } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingItem) {
        // Increase the quantity by 1
        existingItem.quantity += 1; // You can adjust this value if you want to increase by more than 1
      } else {
        // If the item does not exist, you might want to add it to the cart
        state.items.push({
          ...action.payload,
          quantity: 1, // Set initial quantity to 1 if adding a new item
        });
      }
    },


    decreaseItem: (state, action: PayloadAction<Product>) => {
      const { id, selectedSize, selectedColor } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingItem) {
        // Decrease the quantity by 1
        existingItem.quantity = Math.max(existingItem.quantity - 1, 0);

        // If quantity is 0, remove the item from the cart
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) =>
              item.id !== id ||
              item.selectedSize !== selectedSize ||
              item.selectedColor !== selectedColor
          );
        }
      }
    },

   removeItem: (state, action: PayloadAction<Product>) => {
  const { id, selectedSize, selectedColor } = action.payload;

  // Filter out the item from the cart based on id, size, and color
  state.items = state.items.filter(
    (item) =>
      item.id !== id ||
      item.selectedSize !== selectedSize ||
      item.selectedColor !== selectedColor
  );
},
    clearCart: (state) => {
      state.items = [];
    },
    
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  
  decreaseItem,
  increaseItem,
} = cartSlice.actions;

export default cartSlice.reducer;
