db.inventory.insertMany([
    { 
        item: "journal",
        qty: 25,
        size: { h: 14, w: 21, uom: "cm" },
        status: "A" 
    },
    {
        item: "notebook",
        qty: 50,
        size: { h: 8.5, w: 11, uom: "in" },
        status: "A" 
    },
    { 
        item: "paper",
        qty: 100,
        size: { h: 8.5, w: 11, uom: "in" },
        status: "D" 
    },
    { 
        item: "planner",
        qty: 75,
        size: { h: 22.85, w: 30, uom: "cm" },
        status: "D" 
    },
    {
        item: "postcard",
        qty: 45,
        size: { h: 10, w: 15.25, uom: "cm" },
        status: "A" 
    },
    {
        item: "Goma",
        qty: 45,
        size: { h: 16, w: 19.35, uom: "cm" },
        status: "B" 
    },
    {
        item: "Boligrafo",
        qty: 150,
        size: { h: 14.5, w: 18, uom: "cm" },
        status: "C" 
    },
    {
        item: "Lapiz",
        qty: 125,
        size: { h: 7, w: 4, uom: "in" },
        status: "A" 
    },
    {
        item: "Sacapuntas",
        qty: 150,
        size: { h: 13, w: 11.85, uom: "in" },
        status: "C" 
    },
    {
        item: "Rotuladores",
        qty: 40,
        size: { h: 8.75, w: 25, uom: "cm" },
        status: "B" 
    }
 ]);