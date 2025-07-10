import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteContact, getContacts, updateContact, createContact } from './store/contactSlice';

function App() {
  //B1
  const {contacts, loading, error} = useSelector(state => state.contact)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  //B2: tim kiem
  const [search, setSearch] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  //loc theo ten/ email/ phone
  const filterContact = contacts.filter((contact) => {
    const name = contact.name.toLowerCase()
    const email = contact.email.toLowerCase()
    const phone = contact.phone.toLowerCase()
    return name.includes(search) || email.includes(search) || phone.includes(search)
  })

  //B3: form va trang thai edit
  const [form, setForm] = useState({
    id: null,
    name: '',
    email: '',
    phone: ''
  })
  const [edit, setEdit] = useState(null)


  //Them or sua
  const handleSubmit = () => {
    if (!form.name || !form.email) return alert ('no empty')

    if (edit) {
      dispatch(updateContact(form))
      setEdit(null)
    } else {
      dispatch(createContact(form))
    }
    setForm({id: null, name: '', email: '', phone: ''})
    setEdit(null)
  }

  //Edit
  const handleEdit = (contact) => {
    setForm({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })
    setEdit(contact.id)
  }

  //Ham xoa
  const handleDelete = (id) => {
    if (confirm('u r sure u want to delete?')) {
      dispatch(deleteContact(id))
    }
  }

  return (
    <>
      <input 
      type="text"
      placeholder='Search name or email or phone'
      value={search}
      onChange={handleChange}
      style={{padding: '10px'}}
      />

      {loading && <p>Loading..</p>}
      {error && <p>{error}</p>}

      <div style={{margin: '20px 0'}}>
        <input 
        type="text"
        placeholder='name'
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})} 
        />
        <input 
        type="email"
        placeholder='email'
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})} 
        />
        <input 
        type="text"
        placeholder='phone' 
        value={form.phone}
        onChange={(e) => setForm({...form, phone: e.target.value})} 
        />

        <button onClick={handleSubmit}>{edit ? 'save edit' : 'add new'}</button>
      </div>
      
      {filterContact.map(contact => (
        <div key={contact.id}>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        
        <button onClick={() => handleEdit(contact)}>Edit</button>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </div>
      ))}
    </>
  )
}

export default App
