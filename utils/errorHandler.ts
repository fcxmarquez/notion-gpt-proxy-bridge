export const handleError = (error: unknown): { message: string, status: number } => {
  if (error instanceof Error) {
    return { message: error.message, status: 500 };
  } else if (typeof error === 'object' && error !== null && 'response' in error) { // Axios error
    const err = error as { response: { data: string } };
    return { message: err.response.data, status: 500 };
  } else {
    return { message: 'Unknown error', status: 500 };
  }
};

