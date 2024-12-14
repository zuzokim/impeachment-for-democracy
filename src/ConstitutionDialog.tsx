import ReactDOM from "react-dom";
import "./App.css";

export interface ConstitutionDialogProps {
  open: boolean;
  onClose: () => void;
}

function ConstitutionDialog({ open, onClose }: ConstitutionDialogProps) {
  return ReactDOM.createPortal(
    open ? (
      <div className="dialog">
        <div className="constitution-dialog">
          <div className="constitution-title">대한민국 헌법</div>
          <div className="constitution-body">
            <div>
              <div className="constitution-list">제 1조</div>
              <div>
                {`①대한민국은 민주공화국이다.
②대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.`}
              </div>
            </div>
            <div>
              <div className="constitution-list">제 46조</div>
              <div>
                {`①국회의원은 청렴의 의무가 있다.
②국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다.
③국회의원은 그 지위를 남용하여 국가ㆍ공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리ㆍ이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.`}
              </div>
            </div>
          </div>
          <div className="constitution-action">
            <button onClick={onClose}>닫기</button>
          </div>
        </div>
      </div>
    ) : null,
    document.body
  );
}

export default ConstitutionDialog;
