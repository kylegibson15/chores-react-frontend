interface IDataRequest {
  delete: RequestInit;
  get: RequestInit;
  post: (data: any) => RequestInit;
  put: (data: any) => RequestInit;
}

const request: IDataRequest = {
  delete: {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  },
  get: {
    method: 'GET',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    // redirect: 'follow',
    // referrerPolicy: 'no-referrer',
  },
  post: function (data: any) {
    return {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }
  },
  put: function (data: any) {
    return {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }
  }
}

async function dataRequest(url: string, header: RequestInit) {
  const response: any = await fetch(url, header).catch(error => {
    console.error({ error });
  });

  if (response) {
    return response;
  }
}

export { dataRequest, request };
