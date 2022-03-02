import { useAxios } from "../../../logic/helpers/use-axios";

const useAboutScreen = () => {
    /* React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`, {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/vnd.github.cloak-preview',
          }),
        })
          .then(res => res.json())
          .then(response => {
            console.log(response);
          })
          .catch(error => console.log(error));
      }, []); */
      
    const {response, loading, error} = useAxios({
        method: 'GET',
        url: '/photos',
        headers: {
          accept: '*/*',
        },
        // data: {},
      });
    return {response, loading, error}
}

export default useAboutScreen