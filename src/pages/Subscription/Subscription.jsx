import SubscriptionCard from "./SubscriptionCard";

const planoPago = [
    "Adicionar projetos ilimitados",
    "Acesso ao chat ao vivo",
    "Adicionar membros ilimitados à equipe",
    "Relatórios avançados",
    "Suporte prioritário",
    "Opções de personalização",
    "Suporte para integração",
    "Segurança avançada",
    "Treinamento e recursos",
    "Controle de acesso",
    "Fluxos de trabalho personalizados",
  ];
  
  const planoAnual = [
    "Adicionar projetos ilimitados",
    "Acesso ao chat ao vivo",
    "Adicionar membros ilimitados à equipe",
    "Relatórios avançados",
    "Suporte prioritário",
    "Tudo o que o plano mensal tem",
  ];
  
  const planoGratis = [
    "Adicionar apenas 3 projetos",
    "Gerenciamento básico de tarefas",
    "Colaboração em projetos",
    "Relatórios básicos",
    "Notificações por email",
    "Controle de acesso básico",
  ];
  

function Subscription() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Preços</h1>
      <div className="flex felx-col lg:flex justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "Gratuíto",
            fetures: planoGratis,
            planType: "FREE",
            price: 0,
            buttonName: true ? "Plano atual" : "Iniciar",
          }}
        />
        <SubscriptionCard 
        data={{
            planName: "Mensal",
            fetures: planoPago,
            planType: "MONTHTLY",
            price: 799,
            buttonName: true ? "Plano atual" : "Iniciar",
          }}/>
        <SubscriptionCard 
        data={{
            planName: "Anual",
            fetures: planoAnual,
            planType: "ANUAL",
            price: 6711,
            buttonName: true ? "Plano atual" : "Iniciar",
          }}/>
      </div>
    </div>
  );
}

export default Subscription;
