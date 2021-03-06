import { useState } from 'react';
import Router from 'next/router';
import { useRequest } from '../../hooks/useRequest';

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  }
    
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" value={password} />
      </div>
      {errors}
      <button className="btn btn-primary">Sign in</button>
    </form>
  ) 
}