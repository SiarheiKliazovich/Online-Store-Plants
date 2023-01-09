import { getSortedAscRating } from "../sorting/sorting";
import { getSortedDescRating } from "../sorting/sorting";
import { getSortedAscPrice } from "../sorting/sorting";
import { getSortedDescPrice } from "../sorting/sorting";

describe("Sorted helper", () => {
  describe("getSortedAscRating", () => {
    test("Sorted Rating Asc", () => {
      expect(
        getSortedAscRating([
          {
            id: 1,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 25,
            category: "Aeonium",
            stock: 3,
            rating: 4,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
          {
            id: 2,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 27,
            category: "Aeonium",
            stock: 3,
            rating: 2.5,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
        ])
      ).toStrictEqual([
        {
          id: 2,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 27,
          category: "Aeonium",
          stock: 3,
          rating: 2.5,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
        {
          id: 1,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 25,
          category: "Aeonium",
          stock: 3,
          rating: 4,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
      ]);
    });
  });
  describe("getSortedDescRating", () => {
    test("Sorted Rating Desc", () => {
      expect(
        getSortedDescRating([
          {
            id: 1,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 25,
            category: "Aeonium",
            stock: 3,
            rating: 4,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
          {
            id: 2,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 27,
            category: "Aeonium",
            stock: 3,
            rating: 2.5,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
        ])
      ).toStrictEqual([
        {
          id: 1,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 25,
          category: "Aeonium",
          stock: 3,
          rating: 4,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
        {
          id: 2,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 27,
          category: "Aeonium",
          stock: 3,
          rating: 2.5,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
      ]);
    });
  });
  describe("getSortedAscPrice", () => {
    test("Sorted Price Asc", () => {
      expect(
        getSortedAscPrice([
          {
            id: 1,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 25,
            category: "Aeonium",
            stock: 3,
            rating: 4,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
          {
            id: 2,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 27,
            category: "Aeonium",
            stock: 3,
            rating: 2.5,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
        ])
      ).toStrictEqual([
        {
          id: 1,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 25,
          category: "Aeonium",
          stock: 3,
          rating: 4,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
        {
          id: 2,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 27,
          category: "Aeonium",
          stock: 3,
          rating: 2.5,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
      ]);
    });
  });
  describe("getSortedDescPrice", () => {
    test("Sorted Price Desc", () => {
      expect(
        getSortedDescPrice([
          {
            id: 1,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 25,
            category: "Aeonium",
            stock: 3,
            rating: 4,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
          {
            id: 2,
            name: "Biotech",
            title: "The growth of a plant involves several stages.",
            description: ["Fast, a plot of land is selected."],
            size: "XL",
            color: "Pink",
            availability: "In Stock",
            price: 27,
            category: "Aeonium",
            stock: 3,
            rating: 2.5,
            brand: "London-Plants&Co",
            thumbnail:
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            images: [
              "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
            ],
          },
        ])
      ).toStrictEqual([
        {
          id: 2,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 27,
          category: "Aeonium",
          stock: 3,
          rating: 2.5,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
        {
          id: 1,
          name: "Biotech",
          title: "The growth of a plant involves several stages.",
          description: ["Fast, a plot of land is selected."],
          size: "XL",
          color: "Pink",
          availability: "In Stock",
          price: 25,
          category: "Aeonium",
          stock: 3,
          rating: 4,
          brand: "London-Plants&Co",
          thumbnail:
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          images: [
            "https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/2.webp",
          ],
        },
      ]);
    });
  });
});
