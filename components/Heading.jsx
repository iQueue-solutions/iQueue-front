export const Heading = ({ children }) => {
 return (
  <h1 className={`text-3xl md:text-8xl md:lowercase font-semibold md:font-light text-center my-3 text-purple-800`}>
   {children}
  </h1>
 );
};
