document.addEventListener('DOMContentLoaded', () => {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#ffffff',
        primaryTextColor: '#0b0c0c',
        primaryBorderColor: '#1d70b8',
        lineColor: '#505a5f',
        secondaryColor: '#f3f2f1',
        tertiaryColor: '#ffffff',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }
    });
  }
});
