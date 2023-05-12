import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();

  console.log(`${currentPath} ${path}`);

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
