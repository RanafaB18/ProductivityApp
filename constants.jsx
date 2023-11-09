export const priorityToColorMapping = {
    P1: "border-red-600 bg-red-500 hover:bg-red-200 text-red-600",
    P2: "border-orange-600 bg-orange-500 hover:bg-orange-200 text-orange-500",
    P3: "border-blue-600 bg-blue-500 hover:bg-blue-200 text-blue-500",
    P4: "hover:bg-gray-200",
  };
export const priorityToHexMapping = {
    P1: "#dc4c3e",
    P2: "#ec9018",
    P3: "#2872e0",
    P4: "#a7a7a7",
  };
  export const todayDate = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  export const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;