import gitLogo from '../assets/github.png'
import { Container } from './styles'
import { Input } from '../components/Input/'
import { ItemRepo } from '../components/ItemRepo'
import { Button } from '../components/Button'
import { useState } from 'react'
import { api } from '../services/api.js'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`/repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
  }

  const handleRemoveRepo = (id) => {
    const reposFiltered = repos.filter((repo) => repo.id !== id);
		setRepos(reposFiltered);
  }

  return (
    <Container>
      <img src={gitLogo} alt="GitHub Logo" width={52} height={52}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
