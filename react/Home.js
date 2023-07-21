import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	const [userAddr, setUserAddr] = useState("");
	const [userArray, setUserArray] = useState([]);
	const ref = useRef();

	//1. fatch() -> 기본 javaScript 내장 라이브러리
	//2. axios -> Node.js 기반 외부 패키지(설치필요)
	// then -> 응답이 성곡적일때 , catch -> 응답이 실패일때

	useEffect(() => {
	// 	function getInformation() {
	// 		fetch("http://localhost:4000/information")
	// 		.then(res => res.json())
	// 		.then(res => setUserArray(res))
	// 		.catch(err => console.log(err))
	// }
	// getInformation();
		async function getInformation() {
			try {
				const result = await axios.get("http://localhost:4000/information")
				setUserArray(result.data)
			} catch (error) {
				console.log(error)
			}
		}
		getInformation();
	},[] );

	function handleUserName(event) {
		setUserName(event.target.value);
	}

	function handleUserAge(event) {
		setUserAge(event.target.value);
	}

	function handleUserAddr(event) {
		setUserAddr(event.target.value);
	}

	async function onSubmit(event) {
		event.preventDefault();
		if (userName === "" || userAge === "" || userAddr === "") {
			alert("데이터 3개 다 넣으세요~");
		}
		else {
		const tempId = new Date()
		const tempObject = {
			id : tempId.getTime(),
			name: userName,
			age: userAge,
			addr: userAddr
		}
		await axios.post("http://localhost:4000/information", tempObject)
	
		// node.js 패키지 이용 -> Emer, Emmert ??
		// setUserArray(userArray.concat(tempObject));
		setUserArray((prevValue) => [...prevValue, tempObject]);
		setUserName("");
		setUserAge("");
		setUserAddr("");
		ref.current.focus();
	}
	}

	async function onDelete(deleteID) {
		// axios.delete("http://localhost:4000/information/"+ id)
		await axios.delete(`http://localhost:4000/information/${deleteID}`)
		setUserArray(userArray.filter(item=>item.id !== deleteID))
		
	}

	return (
		<div className="container mt-3 text-center">
			<h1>회원 정보 관리 앱 😄</h1>
			<hr />
			<form>
				<input ref={ref} onChange={handleUserName} value={userName} className="form-control mb-2" type="text" placeholder="이름 입력" />
				<input onChange={handleUserAge} value={userAge} className="form-control mb-2" type="text" placeholder="나이 입력" />
				<input onChange={handleUserAddr} value={userAddr} className="form-control mb-2" type="text" placeholder="주소 입력" />
				<button onClick={onSubmit} className="btn btn-primary">등록하기</button>
			</form>
			<hr />
			<h1>가입된 회원 목록 🤩</h1>
			{userArray.length > 0 ? <table className="table table-dark table-striped align-middle">
				<thead>
					<tr>
						<th>이름</th>
						<th>나이</th>
						<th>주소</th>
						<th>수정</th>
						<th>삭제</th>
					</tr>
				</thead>
				<tbody>
					{userArray.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.age}</td>
								<td>{item.addr}</td>
								<td><Link to={`/update/${item.id}`} className="btn btn-success">수정</Link></td>
								<td><button onClick={()=>onDelete(item.id)} className="btn btn-danger">삭제</button></td>
							</tr>
						)
					})}
				</tbody>
			</table> : <p className="text-danger fw-bold">데이터가 없습니다. 입력해주세요.</p>}
		</div>
	)
}

export default Home;
