export const Card = (title, desc) => `
  <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center">
    <h3 class="text-xl font-bold mb-2">${title}</h3>
    <p class="text-gray-600 text-sm">${desc}</p>
  </div>
`;
