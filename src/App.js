// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import {
	Input,
	Button,
	Col,
	Row,
	Container,
	Form,
	Card,
	CardBody,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';

function App() {
	const [title, setTitle] = useState({ name: '', tasks: [{ goal: '' }] });
	const [list, setList] = useState([]);
	const [id, setId] = useState('');
	const [editTitle, setEditTitle] = useState({
		name: '',
		tasks: [{ goal: '' }],
	});
	const [editModal, setEdit] = useState(false);
	const [deleteModal, setDelete] = useState(false);
	const editToggle = () => {
		setEdit(!editModal);
	};

	const deleteToggle = () => {
		setDelete(!deleteModal);
	};

	const handleAddGoals = (e, index, type = null) => {
    const { value } = e.target;
		if (type) {
			const tasks = editTitle.tasks;
			tasks[index]['goal'] = value;
			setEditTitle({ ...editTitle, goals: tasks });
		} else {
			const tasks = title.tasks;
			tasks[index]['goal'] = value;
			setTitle({ ...title, goals: tasks });
		}
	};
	const addGoals = (type = null) => {
    if (type) {
			const total = editTitle.tasks;
			total.push({ goal: '' });
			setEditTitle({ ...editTitle, goals: total });
    } else {
         
			const total = title.tasks;
			total.push({ goal: '' });
			setTitle({ ...title, goals: total });
		}
	};
	const minusGoals = (index, type = null) => {
		if (type) {
			const total = editTitle.tasks;
			total.splice(index, 1);
			setEditTitle({ ...editTitle, goals: total });
		} else {
			const total = title.tasks;
			total.splice(index, 1);
			setTitle({ ...title, goals: total });
		}
	};
	const handleAdd = () => {
		setList([...list, title]);
		setTitle({ name: '', tasks: [{ goal: '' }] });
	};
	const handleEdit = idx => {
		let newTodo = list;
		newTodo[idx] = editTitle;
		setEditTitle({ name: '', tasks: [{ goal: '' }] });
		editToggle();
	};
	const handleDelete = idx => {
		list.splice(idx, 1);
		deleteToggle();
	};
	return (
		<Container className='my-4'>
			<Form
				onSubmit={e => {
					e.preventDefault();
					handleAdd();
				}}
			>
				<Row>
					<Col md='4'>
						<Input
							type='text'
							placeholder='Title'
							value={title.name}
							onChange={e =>
								setTitle({ ...title, name: e.target.value })
							}
							required
						/>
					</Col>
					<div>
						{title.tasks.map((task, idx) => (
							<Row key={idx} className='mt-2'>
								<Col md='3'>
									<Input
										type='text'
										placeholder='Title'
										value={task.goal}
										onChange={e => handleAddGoals(e, idx)}
										required
									/>
								</Col>
								<Col md='1' align='left'>
									{title.tasks.length - 1 === idx && (
										<Button onClick={()=>addGoals()}>
											<i className='fas fa-plus' />
										</Button>
									)}
								</Col>
								<Col md='1' align='left'>
									{title.tasks.length > 1 && (
										<Button onClick={() => minusGoals(idx)}>
											<i className='fas fa-minus' />
										</Button>
									)}
								</Col>
							</Row>
						))}
					</div>
					<Col md={3} align='left'>
						<Button color='primary' type='submit'>
							Add
						</Button>
					</Col>
				</Row>
			</Form>
			<hr />
			<Container className='my-2'>
				<Row>
					{list.map((a, index) => (
						<Col key={index} md={3} align='center'>
							<Card className='bg-primary p-2 m-2'>
								<CardBody>
									<h4>{a.name}</h4>
									<ul>
										{a.tasks.map((task,i) => (
											<li key={i}>{task.goal}</li>
										))}
									</ul>
									<Button
										onClick={() => {
											setId(index);
											setEditTitle(a);
											editToggle();
										}}
									>
										<i className='fas fa-pencil-alt ' />
									</Button>
									<Button
										color='danger'
										onClick={() => {
											setId(index);
											deleteToggle();
										}}
									>
										<i className='fas fa-trash-alt' />
									</Button>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<Modal isOpen={editModal} toggle={editToggle}>
				<ModalHeader toggle={editToggle}> Edit Todo</ModalHeader>
				<ModalBody>
					<Form
						onSubmit={e => {
							e.preventDefault();
							handleEdit(id);
						}}
					>
						<Input
							type='text'
							value={editTitle.name}
							onChange={e =>
								setEditTitle({
									...editTitle,
									name: e.target.value,
								})
							}
							required
						/>
						<div>
							{editTitle.tasks.map((task, idx) => (
								<Row key={idx} className='mt-2'>
									<Col md='3'>
										<Input
											type='text'
											placeholder='Title'
											value={task.goal}
											onChange={e =>
												handleAddGoals(e, idx, 'edit')
											}
											required
										/>
									</Col>
									<Col md='1' align='left'>
										{editTitle.tasks.length - 1 === idx && (
											<Button
												onClick={() => addGoals('edit')}
											>
												<i className='fas fa-plus' />
											</Button>
										)}
									</Col>
									<Col md='1' align='left'>
										{editTitle.tasks.length > 1 && (
											<Button
												onClick={() =>
													minusGoals(idx, 'edit')
												}
											>
												<i className='fas fa-minus' />
											</Button>
										)}
									</Col>
								</Row>
							))}
						</div>
						<Button type='submit' color='success'>
							Update
						</Button>
					</Form>
				</ModalBody>
			</Modal>
			<Modal isOpen={deleteModal} toggle={deleteToggle}>
				<ModalHeader toggle={deleteToggle}>Delete Todo</ModalHeader>
				<ModalBody>
					<div>Are you sure you want to Delete?</div>
					<Button
						onClick={() => {
							handleDelete(id);
						}}
					>
						Delete
					</Button>
					<Button
						onClick={deleteToggle}
						color='danger'
						className='float-right'
					>
						Cancel
					</Button>
				</ModalBody>
			</Modal>
		</Container>
	);
}

export default App;
