const UserService = require("../services/UserService");

module.exports = {
  getUser: async (req, res) => {
    let json = { error: "", result: [] };

    let user = await UserService.getUser();
    for (let i in user) {
    
      json.result.push({
        id: user[i].id,
        name: user[i].name,
        email: user[i].email,
        nascimento: user[i].birth,
        telefone: user[i].phone,
      });
    }
    res.json(json);
  },

  postUser: async (req, res) => {
    let json = { error: "", result: {}, message: "" };
    const { name } = req.body;
    const { email } = req.body;
    const { birth } = req.body;
    const { phone } = req.body;
    if (name && email && birth && phone) {
      let user = await UserService.postUser(name, email, birth, phone);
      json.result = {
        id: user.insertId,
        name,
        email,
        birth,
        phone,
      };
      json.message = "Usuário cadastrado com sucesso!"
      res.status(200).json(json)
    } else {   
      json.error = "Dados incompletos, preencha todos os campos!";
      res.status(500).json(json)     
    }
  },
};
