// Define the Sweeping Edge Enchantment
if (!ModAPI.enchantments["sweeping_edge"]) {
    ModAPI.addEnchantment({
        id: "sweeping_edge",
        name: "Sweeping Edge",
        maxLevel: 3,
        weight: 10,
        description: "Increases sweeping attack damage.",
        type: "weapon"
    });
}

// Create Enchanted Book for Sweeping Edge
ModAPI.addItem({
    id: "book_sweeping_edge",
    name: "Enchanted Book (Sweeping Edge)",
    texture: "enchanted_book",  // Ensure this texture exists in your version
    enchantment: "sweeping_edge",
    level: 1
});

// Add Crafting Recipe for the Sweeping Edge Enchantment Book
ModAPI.addRecipe({
    output: {
        id: "book_sweeping_edge",
        count: 1
    },
    pattern: [
        " E ",
        " B ",
        "   "
    ],
    key: {
        E: "emerald",
        B: "book"
    }
});
