const onlineDishes = [
  {
    "id": 101,
    "title": "Chicken Biryani",
    "image": "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Aromatic basmati rice cooked with tender marinated chicken, infused with traditional Indian spices, garnished with fried onions and fresh coriander. Perfect blend of flavors to satisfy your craving for authentic biryani.",
    "rating": 4.7,
    "price": 350,
    "deliveryTime": 45,
    "category": "order-online",
    "ingredients": ["chicken", "basmati rice", "yogurt", "garam masala", "onion", "coriander"],
    "calories": 550,
    "availability": "10am-10pm",
    "spicyLevel": 3,
    "vegetarian": false,
    "allergens": ["nuts"],
    "restaurantName": "Tasty Bites",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Rahul",
        "comment": "Delicious and well-spiced!",
        "rating": 5
      },
      {
        "user": "Anita",
        "comment": "A bit too spicy for me.",
        "rating": 4
      },
      {
        "user": "Ankit",
        "comment": "Over rated.",
        "rating": 2
      },
      {
        "user": "Suman",
        "comment": "we can say only good taste",
        "rating": 3
      }
    ],
    "portionSize": "Large",
    "prepTime": 30,
    "tags": ["spicy", "popular", "gluten-free"]
  },
  {
    "id": 102,
    "title": "Margherita Pizza",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Classic Italian pizza topped with fresh mozzarella cheese, tangy tomato sauce, and fragrant basil leaves. Crispy crust baked to perfection for a simple yet delicious treat that never goes out of style.",
    "rating": 4.5,
    "price": 299,
    "deliveryTime": 30,
    "category": "order-online",
    "ingredients": ["mozzarella", "tomato sauce", "basil", "flour", "olive oil"],
    "calories": 400,
    "availability": "11am-11pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Pizza Palace",
    "discount": "15% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Sneha",
        "comment": "Loved the fresh basil and gooey cheese!",
        "rating": 5
      },
      {
        "user": "Aditya",
        "comment": "Could have been a little crispier.",
        "rating": 4
      }
    ],
    "portionSize": "Medium",
    "prepTime": 25,
    "tags": ["vegetarian", "popular", "classic"]
  },
  {
    "id": 103,
    "title": "Paneer Butter Masala",
    "image": "https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Soft paneer cubes simmered in a creamy tomato-based gravy with a blend of Indian spices, garnished with fresh cream and coriander leaves. A favorite vegetarian delight packed with rich flavors.",
    "rating": 4.6,
    "price": 280,
    "deliveryTime": 35,
    "category": "order-online",
    "ingredients": ["paneer", "tomato", "butter", "cream", "spices"],
    "calories": 450,
    "availability": "10am-9pm",
    "spicyLevel": 2,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Spice Hub",
    "discount": "5% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Neha",
        "comment": "Rich and creamy, loved it!",
        "rating": 5
      },
      {
        "user": "Karan",
        "comment": "Perfect taste and texture.",
        "rating": 4
      }
    ],
    "portionSize": "Medium",
    "prepTime": 20,
    "tags": ["vegetarian", "creamy", "popular"]
  },
  {
    "id": 104,
    "title": "Veggie Burger",
    "image": "https://images.unsplash.com/photo-1661529515567-dcb300f41da5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "A delicious veggie patty made with mixed vegetables, served on a toasted bun with lettuce, tomato, cheese, and special sauce. A healthy and tasty option for burger lovers.",
    "rating": 4.3,
    "price": 180,
    "deliveryTime": 25,
    "category": "order-online",
    "ingredients": ["mixed vegetables", "bun", "lettuce", "tomato", "cheese", "sauce"],
    "calories": 350,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Burger Town",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Raj",
        "comment": "Nice and fresh veggie burger.",
        "rating": 4
      },
      {
        "user": "Priya",
        "comment": "Loved the sauce!",
        "rating": 5
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["vegetarian", "healthy", "quick"]
  },
  {
    "id": 105,
    "title": "Fish and Chips",
    "image": "https://plus.unsplash.com/premium_photo-1694108747181-b71309018e39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Crispy fried fish fillets served with golden french fries and tangy tartar sauce. A classic comfort food perfect for any time of the day.",
    "rating": 4.4,
    "price": 320,
    "deliveryTime": 40,
    "category": "order-online",
    "ingredients": ["fish fillets", "potatoes", "flour", "oil", "tartar sauce"],
    "calories": 600,
    "availability": "12pm-11pm",
    "spicyLevel": 1,
    "vegetarian": false,
    "allergens": ["gluten", "fish"],
    "restaurantName": "Seafood Shack",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Amit",
        "comment": "Perfectly crispy and tasty.",
        "rating": 5
      },
      {
        "user": "Sonal",
        "comment": "Could have been a bit less oily.",
        "rating": 4
      }
    ],
    "portionSize": "Large",
    "prepTime": 25,
    "tags": ["seafood", "crispy", "classic"]
  },
  {
    "id": 106,
    "title": "Chocolate Brownie",
    "image": "https://images.unsplash.com/photo-1617996884841-3949eaec3448?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Rich and fudgy chocolate brownie with a gooey center, topped with powdered sugar and served warm with vanilla ice cream. The perfect dessert to satisfy your sweet cravings.",
    "rating": 4.8,
    "price": 150,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["chocolate", "flour", "butter", "sugar", "eggs"],
    "calories": 450,
    "availability": "10am-10pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["gluten", "dairy", "eggs"],
    "restaurantName": "Sweet Treats",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Maya",
        "comment": "Absolutely delicious and moist!",
        "rating": 5
      },
      {
        "user": "Rohit",
        "comment": "A perfect chocolate fix.",
        "rating": 4
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["dessert", "chocolate", "popular"]
  },
  {
    "id": 107,
    "title": "Spaghetti Carbonara",
    "image": "https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Classic Italian pasta dish with creamy sauce made from eggs, cheese, pancetta, and pepper. Simple yet indulgent meal loved worldwide for its rich flavor and smooth texture.",
    "rating": 4.6,
    "price": 320,
    "deliveryTime": 30,
    "category": "order-online",
    "ingredients": ["spaghetti", "eggs", "cheese", "pancetta", "pepper"],
    "calories": 550,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": false,
    "allergens": ["gluten", "dairy", "eggs"],
    "restaurantName": "Pasta House",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Vikram",
        "comment": "Perfect creamy texture and flavor.",
        "rating": 5
      },
      {
        "user": "Sonia",
        "comment": "Loved the smoky pancetta!",
        "rating": 4
      }
    ],
    "portionSize": "Medium",
    "prepTime": 25,
    "tags": ["italian", "pasta", "classic"]
  },
  {
    "id": 108,
    "title": "Caesar Salad",
    "image": "https://plus.unsplash.com/premium_photo-1700089483464-4f76cc3d360b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Fresh romaine lettuce tossed with creamy Caesar dressing, croutons, and parmesan cheese. A light yet flavorful salad perfect for a healthy meal or side dish.",
    "rating": 4.2,
    "price": 180,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["romaine lettuce", "caesar dressing", "croutons", "parmesan cheese"],
    "calories": 300,
    "availability": "10am-9pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["dairy", "gluten"],
    "restaurantName": "Green Bowl",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Isha",
        "comment": "Fresh and tasty salad.",
        "rating": 4
      },
      {
        "user": "Manish",
        "comment": "Loved the dressing!",
        "rating": 5
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["salad", "healthy", "vegetarian"]
  },
  {
    "id": 109,
    "title": "Butter Chicken",
    "image": "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Tender chicken pieces cooked in rich tomato and butter gravy, flavored with mild spices and cream. A favorite comfort food across India that pairs well with naan or rice.",
    "rating": 4.8,
    "price": 340,
    "deliveryTime": 40,
    "category": "order-online",
    "ingredients": ["chicken", "tomato", "butter", "cream", "spices"],
    "calories": 600,
    "availability": "10am-10pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["dairy"],
    "restaurantName": "Curry House",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Kavita",
        "comment": "Rich, creamy and delicious!",
        "rating": 5
      },
      {
        "user": "Suresh",
        "comment": "Perfect balance of flavors.",
        "rating": 4
      }
    ],
    "portionSize": "Large",
    "prepTime": 30,
    "tags": ["spicy", "creamy", "popular"]
  },
  {
    "id": 110,
    "title": "Veggie Fried Rice",
    "image": "https://images.unsplash.com/photo-1664717698774-84f62382613b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Stir-fried rice mixed with colorful vegetables and soy sauce, lightly seasoned for a tasty and quick meal. A favorite for vegetarians and quick bites.",
    "rating": 4.4,
    "price": 220,
    "deliveryTime": 25,
    "category": "order-online",
    "ingredients": ["rice", "carrots", "peas", "soy sauce", "spring onion"],
    "calories": 400,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["soy"],
    "restaurantName": "Asian Delight",
    "discount": "5% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Meena",
        "comment": "Light and tasty.",
        "rating": 4
      },
      {
        "user": "Rakesh",
        "comment": "Good portion size.",
        "rating": 4
      }
    ],
    "portionSize": "Regular",
    "prepTime": 20,
    "tags": ["vegetarian", "quick", "asian"]
  },
  {
    "id": 111,
    "title": "Chicken Shawarma Wrap",
    "image": "https://plus.unsplash.com/premium_photo-1676517025037-62fd3d8317e1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Grilled chicken slices wrapped in warm pita bread with fresh veggies, garlic sauce, and spices. A Middle Eastern delight that's filling and flavorful.",
    "rating": 4.6,
    "price": 280,
    "deliveryTime": 30,
    "category": "order-online",
    "ingredients": ["chicken", "pita bread", "lettuce", "garlic sauce", "spices"],
    "calories": 450,
    "availability": "11am-11pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Shawarma House",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Fahad",
        "comment": "Loved the garlic sauce.",
        "rating": 5
      },
      {
        "user": "Lina",
        "comment": "Great taste, perfect wrap.",
        "rating": 4
      }
    ],
    "portionSize": "Regular",
    "prepTime": 20,
    "tags": ["middle-eastern", "spicy", "wrap"]
  },
  {
    "id": 112,
    "title": "Tandoori Chicken",
    "image": "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Juicy chicken marinated in yogurt and spices, cooked in traditional tandoor oven for smoky flavor and tender meat. A classic Indian grilled delicacy.",
    "rating": 4.7,
    "price": 360,
    "deliveryTime": 40,
    "category": "order-online",
    "ingredients": ["chicken", "yogurt", "spices", "lemon"],
    "calories": 500,
    "availability": "12pm-10pm",
    "spicyLevel": 3,
    "vegetarian": false,
    "allergens": ["dairy"],
    "restaurantName": "Grill Master",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Aakash",
        "comment": "Perfectly cooked and flavorful.",
        "rating": 5
      },
      {
        "user": "Simran",
        "comment": "Loved the smoky taste.",
        "rating": 4
      }
    ],
    "portionSize": "Large",
    "prepTime": 35,
    "tags": ["grilled", "spicy", "classic"]
  },
  {
    "id": 113,
    "title": "Chocolate Chip Cookies",
    "image": "https://plus.unsplash.com/premium_photo-1672073871234-7f2de18b9e5d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Freshly baked cookies loaded with semi-sweet chocolate chips. Crispy on the edges and chewy in the center, perfect for a quick sweet treat.",
    "rating": 4.5,
    "price": 120,
    "deliveryTime": 15,
    "category": "order-online",
    "ingredients": ["flour", "butter", "sugar", "chocolate chips", "eggs"],
    "calories": 300,
    "availability": "10am-10pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["gluten", "dairy", "eggs"],
    "restaurantName": "Sweet Treats",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Divya",
        "comment": "Perfectly baked and tasty.",
        "rating": 5
      },
      {
        "user": "Arjun",
        "comment": "A bit too sweet for me.",
        "rating": 4
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["dessert", "cookies", "popular"]
  },
  {
    "id": 114,
    "title": "Mushroom Risotto",
    "image": "https://plus.unsplash.com/premium_photo-1694850980302-f568e6de0f6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Creamy Italian risotto cooked slowly with mushrooms, parmesan cheese, and fresh herbs. A rich and satisfying vegetarian dish perfect for dinner.",
    "rating": 4.4,
    "price": 330,
    "deliveryTime": 35,
    "category": "order-online",
    "ingredients": ["arborio rice", "mushrooms", "parmesan", "butter", "herbs"],
    "calories": 480,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["dairy", "gluten"],
    "restaurantName": "Italiano",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Sahil",
        "comment": "Creamy and delicious!",
        "rating": 5
      },
      {
        "user": "Nisha",
        "comment": "Loved the texture.",
        "rating": 4
      }
    ],
    "portionSize": "Medium",
    "prepTime": 30,
    "tags": ["italian", "vegetarian", "creamy"]
  },
  {
    "id": 115,
    "title": "Grilled Paneer Tikka",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Chunks of paneer marinated with spices and grilled to perfection. Served with mint chutney, it's a favorite starter for vegetarians.",
    "rating": 4.6,
    "price": 290,
    "deliveryTime": 30,
    "category": "order-online",
    "ingredients": ["paneer", "spices", "mint chutney", "yogurt"],
    "calories": 400,
    "availability": "11am-10pm",
    "spicyLevel": 2,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Tandoori Flames",
    "discount": "5% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Ritu",
        "comment": "Perfectly spiced and grilled.",
        "rating": 5
      },
      {
        "user": "Anil",
        "comment": "Loved the mint chutney.",
        "rating": 4
      }
    ],
    "portionSize": "Regular",
    "prepTime": 25,
    "tags": ["vegetarian", "grilled", "starter"]
  },
  {
    "id": 116,
    "title": "Chicken Alfredo Pasta",
    "image": "https://images.unsplash.com/photo-1748012199673-d990c72aaa57?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Creamy pasta tossed with grilled chicken pieces, garlic, and parmesan cheese. A rich and comforting Italian classic loved by many.",
    "rating": 4.7,
    "price": 350,
    "deliveryTime": 30,
    "category": "order-online",
    "ingredients": ["pasta", "chicken", "cream", "parmesan", "garlic"],
    "calories": 600,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": false,
    "allergens": ["dairy", "gluten"],
    "restaurantName": "Pasta House",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      {
        "user": "Deepak",
        "comment": "Rich and creamy, loved it!",
        "rating": 5
      },
      {
        "user": "Sanya",
        "comment": "Good portion size.",
        "rating": 4
      }
    ],
    "portionSize": "Medium",
    "prepTime": 25,
    "tags": ["italian", "pasta", "creamy"]
  },
  {
    "id": 117,
    "title": "Veg Spring Rolls",
    "image": "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Crispy fried spring rolls stuffed with mixed vegetables, served with sweet chili sauce. A perfect appetizer or snack for any time.",
    "rating": 4.3,
    "price": 150,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["cabbage", "carrots", "flour", "oil", "chili sauce"],
    "calories": 300,
    "availability": "10am-9pm",
    "spicyLevel": 2,
    "vegetarian": true,
    "allergens": ["gluten"],
    "restaurantName": "Asian Delight",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Anju",
        "comment": "Crispy and tasty.",
        "rating": 4
      },
      {
        "user": "Rahul",
        "comment": "Perfect snack.",
        "rating": 5
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["vegetarian", "snack", "crispy"]
  },
  {
    "id": 118,
    "title": "Lemon Garlic Prawns",
    "image": "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=745&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Succulent prawns sautéed in lemon and garlic butter sauce, garnished with fresh parsley. A flavorful seafood delight for prawn lovers.",
    "rating": 4.7,
    "price": 400,
    "deliveryTime": 35,
    "category": "order-online",
    "ingredients": ["prawns", "lemon", "garlic", "butter", "parsley"],
    "calories": 350,
    "availability": "12pm-10pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["shellfish", "dairy"],
    "restaurantName": "Seafood Shack",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Meera",
        "comment": "Fresh and tasty prawns.",
        "rating": 5
      },
      {
        "user": "Arjun",
        "comment": "Loved the lemon flavor.",
        "rating": 4
      }
    ],
    "portionSize": "Medium",
    "prepTime": 25,
    "tags": ["seafood", "garlic", "lemon"]
  },
  {
    "id": 119,
    "title": "Veggie Sandwich",
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Whole wheat sandwich filled with fresh veggies, cheese, and tangy sauce. Healthy, fresh, and perfect for a light meal or snack.",
    "rating": 4.2,
    "price": 140,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["whole wheat bread", "lettuce", "tomato", "cheese", "sauce"],
    "calories": 300,
    "availability": "10am-9pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Healthy Eats",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Sana",
        "comment": "Fresh and light.",
        "rating": 4
      },
      {
        "user": "Vikram",
        "comment": "Perfect snack option.",
        "rating": 4
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["vegetarian", "healthy", "snack"]
  },
  {
    "id": 120,
    "title": "Chocolate Lava Cake",
    "image": "https://plus.unsplash.com/premium_photo-1723618822165-0b13c0471fc4?q=80&w=408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream. A decadent dessert to satisfy your sweet tooth.",
    "rating": 4.8,
    "price": 180,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["chocolate", "flour", "butter", "sugar", "eggs"],
    "calories": 500,
    "availability": "10am-10pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["gluten", "dairy", "eggs"],
    "restaurantName": "Sweet Treats",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      {
        "user": "Priya",
        "comment": "Absolutely delicious and rich!",
        "rating": 5
      },
      {
        "user": "Rohit",
        "comment": "Perfect dessert after dinner.",
        "rating": 5
      }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["dessert", "chocolate", "popular"]
  },
  // ...existing code...
{
    "id": 121,
    "title": "Egg Fried Rice",
    "image": "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Classic Chinese-style fried rice with fluffy eggs, spring onions, and a hint of soy sauce. Quick, tasty, and filling.",
    "rating": 4.3,
    "price": 210,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["rice", "eggs", "soy sauce", "spring onion", "oil"],
    "calories": 380,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": false,
    "allergens": ["eggs", "soy"],
    "restaurantName": "Asian Delight",
    "discount": "5% off",
     "quantity": 1,
    "reviews": [
      { "user": "Nitin", "comment": "Simple and tasty.", "rating": 4 },
      { "user": "Riya", "comment": "Eggs were fluffy!", "rating": 5 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["asian", "quick", "egg"]
  },
  {
    "id": 122,
    "title": "Greek Salad",
    "image": "https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Fresh cucumbers, tomatoes, olives, feta cheese, and onions tossed in olive oil. A refreshing Mediterranean salad.",
    "rating": 4.5,
    "price": 200,
    "deliveryTime": 15,
    "category": "order-online",
    "ingredients": ["cucumber", "tomato", "olives", "feta", "onion", "olive oil"],
    "calories": 250,
    "availability": "10am-9pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Green Bowl",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Asha", "comment": "Very fresh and light.", "rating": 5 },
      { "user": "Manoj", "comment": "Loved the feta.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 10,
    "tags": ["salad", "healthy", "vegetarian"]
  },
  {
    "id": 123,
    "title": "Pepperoni Pizza",
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Classic pizza topped with spicy pepperoni, mozzarella cheese, and tomato sauce. A favorite for pizza lovers.",
    "rating": 4.6,
    "price": 320,
    "deliveryTime": 30,
    "category": "order-online",
    "ingredients": ["pepperoni", "mozzarella", "tomato sauce", "flour", "olive oil"],
    "calories": 480,
    "availability": "11am-11pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Pizza Palace",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      { "user": "Rakesh", "comment": "Pepperoni was spicy and good.", "rating": 5 },
      { "user": "Sneha", "comment": "Cheese was perfect.", "rating": 4 }
    ],
    "portionSize": "Medium",
    "prepTime": 25,
    "tags": ["pizza", "spicy", "classic"]
  },
  {
    "id": 124,
    "title": "Dal Makhani",
    "image": "https://media.istockphoto.com/photos/dal-makhani-or-daal-makhani-indian-lunchdinner-menu-picture-id530506394?b=1&k=20&m=530506394&s=170667a&w=0&h=mXhaccsU1OKMg8vJ7Ge9r78QI3TiWFjYZQP5DyoN5to=",
    "description": "Slow-cooked black lentils in creamy tomato gravy, flavored with butter and spices. A North Indian favorite.",
    "rating": 4.7,
    "price": 260,
    "deliveryTime": 35,
    "category": "order-online",
    "ingredients": ["black lentils", "tomato", "butter", "cream", "spices"],
    "calories": 420,
    "availability": "10am-10pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Spice Hub",
    "discount": "5% off",
     "quantity": 1,
    "reviews": [
      { "user": "Priya", "comment": "Rich and creamy!", "rating": 5 },
      { "user": "Amit", "comment": "Authentic taste.", "rating": 4 }
    ],
    "portionSize": "Large",
    "prepTime": 30,
    "tags": ["vegetarian", "creamy", "indian"]
  },
  {
    "id": 125,
    "title": "BBQ Chicken Wings",
    "image": "https://tse2.mm.bing.net/th/id/OIP.LtaYOQHlKzyuGypT3TGD_AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Juicy chicken wings tossed in smoky BBQ sauce, served with ranch dip. Perfect for sharing.",
    "rating": 4.4,
    "price": 270,
    "deliveryTime": 25,
    "category": "order-online",
    "ingredients": ["chicken wings", "bbq sauce", "spices", "ranch dip"],
    "calories": 500,
    "availability": "12pm-11pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["dairy"],
    "restaurantName": "Grill Master",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Sahil", "comment": "Loved the smoky flavor.", "rating": 5 },
      { "user": "Nisha", "comment": "A bit messy but tasty.", "rating": 4 }
    ],
    "portionSize": "Large",
    "prepTime": 20,
    "tags": ["bbq", "chicken", "starter"]
  },
  {
    "id": 126,
    "title": "Falafel Wrap",
    "image": "https://pickyeaterblog.com/wp-content/uploads/2022/11/healthy-falafel-wrap-recipe.jpg",
    "description": "Crispy falafel balls wrapped in pita with lettuce, tomato, and tahini sauce. A Middle Eastern vegetarian delight.",
    "rating": 4.5,
    "price": 210,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["chickpeas", "pita", "lettuce", "tomato", "tahini"],
    "calories": 350,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["gluten", "sesame"],
    "restaurantName": "Shawarma House",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Zara", "comment": "Very filling and tasty.", "rating": 5 },
      { "user": "Imran", "comment": "Loved the tahini.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["vegetarian", "wrap", "middle-eastern"]
  },
  {
    "id": 127,
    "title": "Classic Cheeseburger",
    "image": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce in a toasted bun.",
    "rating": 4.6,
    "price": 250,
    "deliveryTime": 25,
    "category": "order-online",
    "ingredients": ["beef patty", "cheddar", "bun", "lettuce", "tomato", "sauce"],
    "calories": 520,
    "availability": "12pm-11pm",
    "spicyLevel": 1,
    "vegetarian": false,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Burger Town",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      { "user": "Sam", "comment": "Classic taste, loved it.", "rating": 5 },
      { "user": "Aarav", "comment": "Juicy and cheesy.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 20,
    "tags": ["burger", "cheese", "classic"]
  },
  {
    "id": 128,
    "title": "Hakka Noodles",
    "image": "https://plus.unsplash.com/premium_photo-1661432479675-595fc5f16219?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Stir-fried noodles with mixed veggies and soy sauce. Indo-Chinese favorite for a quick meal.",
    "rating": 4.3,
    "price": 180,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["noodles", "carrots", "capsicum", "soy sauce", "spring onion"],
    "calories": 350,
    "availability": "11am-10pm",
    "spicyLevel": 2,
    "vegetarian": true,
    "allergens": ["gluten", "soy"],
    "restaurantName": "Asian Delight",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Kriti", "comment": "Tasty and spicy.", "rating": 4 },
      { "user": "Rohan", "comment": "Good portion.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["noodles", "asian", "vegetarian"]
  },
  {
    "id": 129,
    "title": "Mutton Rogan Josh",
    "image": "https://img.freepik.com/premium-photo/mutton-rogan-josh-rich-aromatic-mutton-rogan-josh-classic-kashmiri-dish_1230902-1645.jpg?w=1060",
    "description": "Tender mutton pieces cooked in aromatic Kashmiri spices and yogurt gravy. Rich and flavorful.",
    "rating": 4.7,
    "price": 390,
    "deliveryTime": 45,
    "category": "order-online",
    "ingredients": ["mutton", "yogurt", "spices", "onion", "ghee"],
    "calories": 600,
    "availability": "12pm-10pm",
    "spicyLevel": 3,
    "vegetarian": false,
    "allergens": ["dairy"],
    "restaurantName": "Curry House",
    "discount": "10% off",
     "quantity": 1,
    "reviews": [
      { "user": "Farhan", "comment": "Authentic taste!", "rating": 5 },
      { "user": "Ritu", "comment": "Very rich and spicy.", "rating": 4 }
    ],
    "portionSize": "Large",
    "prepTime": 35,
    "tags": ["indian", "spicy", "mutton"]
  },
  {
    "id": 130,
    "title": "Veg Club Sandwich",
    "image": "https://plus.unsplash.com/premium_photo-1669687759566-e07cf4e03e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2x1YiUyMHNhbmR3aWNofGVufDB8fDB8fHww",
    "description": "Triple-layered sandwich with veggies, cheese, and mayo. Served with fries for a filling meal.",
    "rating": 4.2,
    "price": 160,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["bread", "lettuce", "tomato", "cheese", "mayo"],
    "calories": 350,
    "availability": "10am-9pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["gluten", "dairy", "eggs"],
    "restaurantName": "Healthy Eats",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Sana", "comment": "Very filling.", "rating": 4 },
      { "user": "Vikram", "comment": "Good for lunch.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["vegetarian", "sandwich", "snack"]
  },
  {
    "id": 131,
    "title": "Pav Bhaji",
    "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Spicy mashed vegetable curry served with buttered pav buns. Mumbai street food classic.",
    "rating": 4.5,
    "price": 140,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["mixed vegetables", "butter", "pav", "spices", "onion"],
    "calories": 400,
    "availability": "11am-10pm",
    "spicyLevel": 2,
    "vegetarian": true,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Spice Hub",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Meena", "comment": "Tastes like Mumbai!", "rating": 5 },
      { "user": "Rakesh", "comment": "Loved the butter.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["indian", "street-food", "vegetarian"]
  },
  {
    "id": 132,
    "title": "Chicken Caesar Wrap",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Grilled chicken, lettuce, parmesan, and Caesar dressing wrapped in a soft tortilla.",
    "rating": 4.4,
    "price": 230,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["chicken", "lettuce", "parmesan", "caesar dressing", "tortilla"],
    "calories": 420,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": false,
    "allergens": ["gluten", "dairy", "eggs"],
    "restaurantName": "Green Bowl",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Isha", "comment": "Very fresh.", "rating": 4 },
      { "user": "Manish", "comment": "Loved the dressing.", "rating": 5 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["wrap", "chicken", "healthy"]
  },
  {
    "id": 133,
    "title": "Schezwan Paneer",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Paneer cubes tossed in spicy Schezwan sauce with bell peppers and onions. Indo-Chinese favorite.",
    "rating": 4.3,
    "price": 260,
    "deliveryTime": 25,
    "category": "order-online",
    "ingredients": ["paneer", "schezwan sauce", "bell pepper", "onion"],
    "calories": 380,
    "availability": "11am-10pm",
    "spicyLevel": 3,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Asian Delight",
    "discount": "5% off",
     "quantity": 1,
    "reviews": [
      { "user": "Ritu", "comment": "Spicy and tasty.", "rating": 4 },
      { "user": "Anil", "comment": "Loved the sauce.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 20,
    "tags": ["paneer", "spicy", "asian"]
  },
  {
    "id": 134,
    "title": "Fish Tacos",
    "image": "https://plus.unsplash.com/premium_photo-1672976349009-918d041258aa?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Grilled fish fillets in soft tortillas with cabbage slaw and tangy sauce. A coastal favorite.",
    "rating": 4.5,
    "price": 320,
    "deliveryTime": 25,
    "category": "order-online",
    "ingredients": ["fish", "tortilla", "cabbage", "sauce", "lime"],
    "calories": 350,
    "availability": "12pm-10pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["fish", "gluten"],
    "restaurantName": "Seafood Shack",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Meera", "comment": "Fresh and tasty.", "rating": 5 },
      { "user": "Arjun", "comment": "Loved the slaw.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 20,
    "tags": ["seafood", "taco", "spicy"]
  },
  {
    "id": 135,
    "title": "Veg Manchurian",
    "image": "https://thumbs.dreamstime.com/z/veg-manchurian-popular-indo-chinese-food-made-cauliflower-florets-other-vegetable-served-white-plate-over-rustic-225789552.jpg",
    "description": "Crispy vegetable balls tossed in tangy Manchurian sauce. Indo-Chinese street food favorite.",
    "rating": 4.4,
    "price": 180,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["mixed vegetables", "soy sauce", "flour", "spices"],
    "calories": 320,
    "availability": "11am-10pm",
    "spicyLevel": 2,
    "vegetarian": true,
    "allergens": ["gluten", "soy"],
    "restaurantName": "Asian Delight",
    "discount": "No discount",
     "quantity": 1,
    "reviews": [
      { "user": "Anju", "comment": "Crispy and tangy.", "rating": 4 },
      { "user": "Rahul", "comment": "Perfect snack.", "rating": 5 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["vegetarian", "asian", "snack"]
  },
  {
    "id": 136,
    "title": "Butter Garlic Naan",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Soft Indian flatbread topped with butter and garlic. Perfect with curries.",
    "rating": 4.6,
    "price": 80,
    "deliveryTime": 15,
    "category": "order-online",
    "ingredients": ["flour", "butter", "garlic", "yeast"],
    "calories": 220,
    "availability": "11am-10pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Tandoori Flames",
    "discount": "No discount",
    "reviews": [
      { "user": "Deepak", "comment": "Soft and flavorful.", "rating": 5 },
      { "user": "Sanya", "comment": "Loved the garlic.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 10,
    "tags": ["indian", "bread", "vegetarian"]
  },
  {
    "id": 137,
    "title": "Classic Gulab Jamun",
    "image": "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Soft, spongy milk balls soaked in rose-flavored sugar syrup. Traditional Indian dessert.",
    "rating": 4.8,
    "price": 120,
    "deliveryTime": 10,
    "category": "order-online",
    "ingredients": ["milk solids", "sugar", "rose water", "cardamom"],
    "calories": 300,
    "availability": "10am-10pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Sweet Treats",
    "discount": "No discount",
    "reviews": [
      { "user": "Maya", "comment": "Melt in mouth!", "rating": 5 },
      { "user": "Rohit", "comment": "Very sweet and soft.", "rating": 5 }
    ],
    "portionSize": "Regular",
    "prepTime": 10,
    "tags": ["dessert", "indian", "sweet"]
  },
  {
    "id": 138,
    "title": "Veggie Quesadilla",
    "image": "https://www.gimmesomeoven.com/wp-content/uploads/2019/09/Healthy-Veggie-Quesadillas-Recipe-4.jpg",
    "description": "Grilled tortilla stuffed with cheese, bell peppers, and onions. Served with salsa.",
    "rating": 4.3,
    "price": 190,
    "deliveryTime": 20,
    "category": "order-online",
    "ingredients": ["tortilla", "cheese", "bell pepper", "onion", "salsa"],
    "calories": 320,
    "availability": "11am-10pm",
    "spicyLevel": 1,
    "vegetarian": true,
    "allergens": ["gluten", "dairy"],
    "restaurantName": "Mexican Fiesta",
    "discount": "No discount",
    "reviews": [
      { "user": "Divya", "comment": "Cheesy and tasty.", "rating": 4 },
      { "user": "Arjun", "comment": "Loved the salsa.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 15,
    "tags": ["mexican", "vegetarian", "cheese"]
  },
  {
    "id": 139,
    "title": "Chicken Tikka Masala",
    "image": "https://tse4.mm.bing.net/th/id/OIP.lwSYs4d-O3_8s6bcf5kUGQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "description": "Grilled chicken pieces in creamy tomato masala sauce. A British-Indian classic.",
    "rating": 4.7,
    "price": 340,
    "deliveryTime": 35,
    "category": "order-online",
    "ingredients": ["chicken", "tomato", "cream", "spices"],
    "calories": 550,
    "availability": "11am-10pm",
    "spicyLevel": 2,
    "vegetarian": false,
    "allergens": ["dairy"],
    "restaurantName": "Curry House",
    "discount": "10% off",
    "reviews": [
      { "user": "Kavita", "comment": "Rich and creamy.", "rating": 5 },
      { "user": "Suresh", "comment": "Perfect with naan.", "rating": 4 }
    ],
    "portionSize": "Large",
    "prepTime": 25,
    "tags": ["indian", "chicken", "spicy"]
  },
  {
    "id": 140,
    "title": "Fruit Custard",
    "image": "https://images.unsplash.com/photo-1505253213348-ce3e0ff1f0cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Chilled custard with mixed seasonal fruits. Light, sweet, and refreshing dessert.",
    "rating": 4.4,
    "price": 130,
    "deliveryTime": 10,
    "category": "order-online",
    "ingredients": ["milk", "sugar", "custard powder", "fruits"],
    "calories": 220,
    "availability": "10am-10pm",
    "spicyLevel": 0,
    "vegetarian": true,
    "allergens": ["dairy"],
    "restaurantName": "Sweet Treats",
    "discount": "No discount",
    "reviews": [
      { "user": "Priya", "comment": "Very refreshing.", "rating": 4 },
      { "user": "Rohit", "comment": "Loved the fruits.", "rating": 4 }
    ],
    "portionSize": "Regular",
    "prepTime": 10,
    "tags": ["dessert", "fruit", "sweet"]
  }
// ...existing code...

]
export default onlineDishes;