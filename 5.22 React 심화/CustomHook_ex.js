// const useFetch = ( initialUrl:string ) => {
// 	const [url, setUrl] = useState(initialUrl);
// 	const [value, setValue] = useState('');

// 	const fetchData = () => axios.get(url).then(({data}) => setValue(data));	

// 	useEffect(() => {
// 		fetchData();
// 	},[url]);

// 	return [value];
// };

// export default 

// import { useState, useCallback } from 'react';

// function useInputs(initialForm) {
//   const [form, setForm] = useState(initialForm);
//   // change
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setForm(form => ({ ...form, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);
//   return [form, onChange, reset];
// }

// export default useInputs;