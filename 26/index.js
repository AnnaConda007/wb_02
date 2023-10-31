const useDOM = (node, action) => {
  if (node.nodeType === Node.TEXT_NODE) return;
  action(node);
  for (let i = 0; i < node.childNodes.length; i++) {
    useDOM(node.childNodes[i], action);
  }
};

useDOM(document.body, console.log);
