const initialState = {
  items: [
    {
      itemName: "Phone-1",
      itemImage:
        "https://stg-images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-6gb-sm-m515fzbdins--301211700?scl=1&fmt=png-alpha",
      itemPrize: "1000",
    },
    {
      itemName: "Phone-2",
      itemImage:
        "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg",
      itemPrize: "10000",
    },
    {
      itemName: "Phone-3",
      itemImage:
        "https://cdn01.grameenphone.com/shop/sites/default/files/Redmi-9A-_Blue_Front.png",
      itemPrize: "2000",
    },
    {
      itemName: "Tshirt-1",
      itemImage:
        "https://assets-global.website-files.com/5ccc8aa73871f9d12dc81c1b/5cdececc2d6a5a68f8c5c408_cms_1443892614312-AA_2001_M_1800.jpg",
      itemPrize: "100",
    },
    {
      itemName: "Tshirt-2",
      itemImage:
        "https://images.othoba.com/images/thumbs/0165342_valentine-special-couple-t-shirt-icf00088_300.jpeg",
      itemPrize: "200",
    },
    {
      itemName: "Tshirt-3",
      itemImage: "https://cf.shopee.ph/file/e3de918ac0beb5f2e4deed1ffb2d9cb5",
      itemPrize: "300",
    },
    {
      itemName: "Tshirt-4",
      itemImage:
        "https://cdn.shopify.com/s/files/1/2806/3048/products/product-image-1382929751_1024x1024@2x.jpg?v=1615327354",
      itemPrize: "400",
    },
  ],
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_LIST":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};
