const API_URL = import.meta.env.VITE_API_KEYL;

export const fetchNews = async () => {
  try {
    const response = await fetch(`${API_URL}/api/news`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetaching news:', error);
    throw error;
  }
};
