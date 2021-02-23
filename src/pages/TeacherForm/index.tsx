import React, {FormEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm(){

    const history = useHistory();

    const[name, setName] = useState('');
    const[avatar, setAvatar] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[bio, setBio] = useState('');
    const[subject, setSubject] = useState('');
    const[cost, setCost] = useState('');
  
    /* O React só observa a variável se ela tiver utilizando o conceito de estado */
    /* O useState retorna duas coisas sendo que o primeiro é o schedule items  */
    /* As varíaveis criadas no react não são modificaveis (imutabilidade) */
    /* Para conseguirmos alterar a variavel utilizamos o segundo retorno do useState
    que é uma função na qual podemos substituir os valores já presentes por novos */
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem(){

        /* Para copiar o conteuúdo o objeto existente no array da forma mais fácil no js 
        e adicionar novos objetos criamos um novo array e utilizamos o spread operator*/
        /* Alterando o estado do array o React renderiza novamente o objeto */
        setScheduleItems([
            ...scheduleItems,
            { //Novo objeto a ser incluído no array existente
                week_day: 0,
                from: '',
                to: '',
            }
            
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string){

        //field = week_day ou from ou to

        //Criamos um novo array com as alterações

        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {

            if(index === position){
                /*Sem colcheltes o field seria o nome da propriedade e nao utiizaria o param que a função recebe
                dessa forma o campo será sobrescrito com o valor que passamos após o spread operator*/
                return {...scheduleItem, [field]: value}; //retorna o objeto da posição equivalente
            }

            //Sem alteração de valores se não for a mesma posição que se quer alterar
            return scheduleItem;
        });

    
       setScheduleItems(updatedScheduleItems);

    }

    function handleCreateClass(e: FormEvent){

        e.preventDefault(); //Evita o redirecionamento ao realizar submit

        api.post('classes', {
            name, 
            avatar, 
            whatsapp, 
            bio, 
            subject, 
            cost: Number(cost), 
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            //Redirecionar para outra rota, sem click
            history.push('/');

        }).catch(() => {
            alert('Erro no cadastro!');
        });

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." 
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

        <main>
        <form onSubmit={handleCreateClass}>
         <fieldset>
             <legend>Seus Dados</legend>

            <Input name="name" label="Nome Completo" value={name} 
            onChange={(e) => { setName(e.target.value) }} /> {/* onChange nesse contexto retorna um evento (e) */}
            
            <Input name="avatar" label="Avatar" value={avatar} 
            onChange={(e) => { setAvatar(e.target.value) }} />

            <Input name="whatsapp" label="WhatsApp" value={whatsapp} 
            onChange={(e) => { setWhatsapp(e.target.value) }} />

            <Textarea name="bio" label="Biografia"value={bio} 
            onChange={(e) => { setBio(e.target.value) }} />

         </fieldset>
         
         <fieldset>
             <legend>Sobre a aula</legend>

            <Select name="subject" label="Matéria" value={subject}
             onChange={(e) => {setSubject(e.target.value)}}
            options={[
                {value: 'Artes', label: 'Artes'},
                {value: 'Biologia', label: 'Biologia'},
                {value: 'Ciências', label: 'Ciências'},
                {value: 'Educação física', label: 'Educação física'},
                {value: 'Física', label: 'fisica'},
                {value: 'Geografia', label: 'Geografia'},
                {value: 'História', label: 'História'},
                {value: 'Matemática', label: 'Matemática'},
                {value: 'Português', label: 'Português'},
                {value: 'Química', label: 'Artes'},
                
            ]}
            />
            <Input name="cost" label="Custo da sua hora por aula" 
            value={cost} onChange={(e) => {setCost(e.target.value)}}/>

         </fieldset>

         <fieldset>
             <legend>
                 Horários Disponíveis
                <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
             </legend>
           
          {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                <Select name="week_day" label="Dia da semana" value={scheduleItem.week_day} onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sábado'},        
                    ]}
                />

                <Input name="from" label="Das" type="time" value={scheduleItem.from}  onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                <Input name="to" label="Até" type="time" value={scheduleItem.to}  onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
            </div>

              );
          })}

         </fieldset>

        <footer>
            <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
            </p>
            <button type="submit"> 
                Salvar cadastro
            </button>
        </footer>
        </form>
        </main>
        </div>
    );

}

export default TeacherForm;