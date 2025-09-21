// DataContext.js
import { createContext, useEffect, useState } from "react";
import React from "react"
export const DataContext = createContext(null);


export const DataProvider = ({ children }) => {
    const [currActiveIndex, setCurrActiveIndex] = useState(0)
    const [bookMark, setBookMark] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [price, setPrice] = useState('')
    const [finalDetail, setFinalDetail] = useState({})
    const [reservedSeats, setReservedSeats] = useState([]);

    const emojiData = [

        {
            name: "Healthy",
            emoji: "🥗",
            image: "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "Fresh, nutritious and energizing.",
        },
        {
            name: "Starter",
            emoji: "🍤",
            image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "Warm & filling meals that feel like home.",
        },
        {
            name: "Popular",
            emoji: "🔥",
            image: "https://thaka.bing.com/th/id/OIP.qLrcPu3QI1ZC0W4rzvG0XgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
            content: "Fast, tasty snacks for busy days.",
        },
        {
            name: "Dessert",
            emoji: "🍰",
            image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "Sweet treats to delight your soul.",
        },
        {
            name: "Classic",
            emoji: "🍽️",
            image: "https://plus.unsplash.com/premium_photo-1674228288173-519727295a6c?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "Cool drinks and warm sips for every mood.",
        },
        {
            name: "Spicy",
            emoji: "🌶️",
            image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "Hot and bold flavors to spice things up.",
        },
    ];

    // {* Add To Bookmark*}
    const handleBookMark = (dishDetail) => {
        const isAlreadyBookMarked = bookMark.find((item) => item.id === dishDetail.id)
        if (isAlreadyBookMarked) {
            alert("Dish is Already BookMarked ✔️")
        } else {
            const updatedBookMark = [...bookMark, dishDetail];
            setBookMark(updatedBookMark)
        }

    }

    // {* Add To Cart*}
    const handleAddToCart = (dishDetail) => {
        const isAlreadyItemCart = cartItems.find((item) => item.id === dishDetail.id)
        if (isAlreadyItemCart) {
            alert("Item is Already in Cart ✔️")
        } else {
            const updatedCart = [...cartItems, dishDetail]
            setCartItems(updatedCart)
        }
    }


    // {* Delete Bookmark *}
    const handleDeleteBookMark = (index) => {
        const updatedFilter = bookMark.filter((item, idx) => {
            return idx !== index
        })
        setBookMark(updatedFilter)

    }

    // {* Remove Dish *}
    const handleRemoveDish = (index) => {
        const filterCartItems = cartItems.filter((items, idx) => {
            return idx !== index
        })
        setCartItems(filterCartItems)
    }

    // {* Increase Quantity *}
    const handleIncreaseQuantity = (index) => {
        const updatedQuantity = cartItems.map((item, idx) => {
            return idx === index ? { ...item, quantity: item.quantity + 1 } : item
        })
        setCartItems(updatedQuantity)
    }

     // {* Decrease Quantity *}
    const handleDecreaseQuantity = (index) => {
        const updatedQuantity = cartItems.map((item, idx) => {
            return idx === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        })
        setCartItems(updatedQuantity)
    }

     // {* Priice  *}
    const handlePrice = () => {
        const handlePrice = cartItems.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity
        }, null)
        setPrice(handlePrice)
    }


    useEffect(() => {
        handlePrice()
    }, [cartItems])


    // {* DiningDish Bookamrk *}
    const handleBookMarkDiningDish = (diningDishDetail) => {
        const isAlreadyBookMarked = bookMark.find((item) => item.id === diningDishDetail.id)
        if (isAlreadyBookMarked) {
            alert("Dish is Already BookMarked ✔️")
        } else {
            const updatedBookMark = [...bookMark, diningDishDetail];
            setBookMark(updatedBookMark)
        }
    }


    //  {* Proceed To Checkout *}
    const handleProceedToCheckOut = (detail) => {
        setFinalDetail(detail)
    }

   

    //  {* Place order *}
    const handlePlaceOrder = (finalDetail) => {
        const currentUser = JSON.parse(sessionStorage.getItem('loginDetail'));

        if (!currentUser || !currentUser.email) {
            alert("Please login first");
            return;
        }


        const allOrders = JSON.parse(localStorage.getItem('orderDetail')) || {};


        const newOrder = {
            id: Date.now(),
            items: finalDetail,
            status: 'Pending',
            orderDate: new Date().toLocaleDateString(),
            deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        };


        if (!allOrders[currentUser.email]) {
            allOrders[currentUser.email] = [];
        }

        allOrders[currentUser.email].push(newOrder);


        localStorage.setItem('orderDetail', JSON.stringify(allOrders));
        console.log("✅ Order Saved For:", currentUser.email, allOrders);
    };



    // {* Emoji Based Menu *}
    const handleEmojiData = (index) => {
        setCurrActiveIndex(index)

    }


    // {* Rservation Data *}
    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem("loginDetail"));
        const allReservations = JSON.parse(localStorage.getItem("reservations")) || {};

        const userReservations = currentUser?.email
            ? allReservations[currentUser.email] || []
            : [];

        setReservedSeats(userReservations);
    }, []);



    return (
        <DataContext.Provider
            value=
            {{
                emojiData,
                currActiveIndex,
                handleEmojiData,
                handleBookMark,
                handleRemoveDish,
                handleIncreaseQuantity,
                bookMark,
                cartItems,
                finalDetail,
                handleDeleteBookMark,
                handleAddToCart,
                handleDecreaseQuantity,
                price,
                reservedSeats,
                handleBookMarkDiningDish,
                handleProceedToCheckOut,
                handlePlaceOrder
            }}>
            {children}
        </DataContext.Provider>
    );
};
