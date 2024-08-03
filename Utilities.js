export const  convertToKebabCase = (str) => {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Split the string into words based on spaces
    let words = str.split(' ');
  
    // Join the words with hyphens
    return words.join('-');
  }

  