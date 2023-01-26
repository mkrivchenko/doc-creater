<template>
    <div class="break"></div>
	<div class="header" >
        <div class="header__condition-name margin-top">
            <b>АКТ</b><br>
			о подключении (технологическом присоединении)
        </div>
    </div>
	<table class="table">
		<tr>
			<td>
				г. Барнаул
			</td>
			<td align="right">
				<span class="edit-highlighting"> «_____» ______________ 202__ г.</span><br>
			</td>
		</tr>
	</table>

	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		<b>Общество с Ограниченной Ответственностью «Сибгаз-Эксплуатация»</b>, именуемое в дальнейшем <b>«Исполнитель»</b>, в лице представителя 
	</p>
	<div class="margin-tb">
		<p class="paragraph underline"><span class="paragraphMargin"></span>
			<b>Гилева Геннадия Филипповича</b>
		</p>
		<p class="paragraph-comment">
			(фамилия, имя, отчество лица – представителя газораспределительной организации)
		</p>
	</div>
	<p>
		действующего на основании доверенности № 01 от «10» января 2022 г. с одной стороны, 
	</p>
	<div class="margin-tb">
		<p class="paragraph underline"><span class="paragraphMargin"></span>
			<b><span class="contract-header__number edit-highlighting" >{{DataContract?.person.fullname.data}} </span></b>
		</p>
		<p class="paragraph-comment">
			(фамилия, имя, отчество лица - представителя заявителя)
		</p>
	</div>

	<p>
		именуемый в дальнейшем «Заявитель», в дальнейшем именуемые <b>сторонами</b>, оформили и подписали настоящий акт о том, что в соответствии с договором о подключении (технологическом присоединении) объекта капитального строительства к сети газораспределения (далее-договор) произведено подключение (технологическое присоединение) объекта капитального строительства, расположенного по адресу:
		<span class="edit-highlighting"><b> {{DataContract?.contract.contractAddress.data}} </b></span>, к сети газораспределения, принадлежащей исполнителю <b>ООО «СибГазСтрой». Основной абонент</b>.                                                   
	</p>

	<table class="body-table">
		<tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            </td>
            <td colspan="3">
                Характеристики выполненного присоединения:
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				присоединение сети газораспределения в точке подключения: <span class="edit-highlighting"> {{DataContract?.contract.pipeline.data}} </span> 
			</td>
        </tr>
		<tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
    </table>
	<table class="body-table">
        <tr>
            <td class="table__cell-number">
            </td>
            <td colspan="3">
				<!-- Расположение газопровода: <u>подземное</u>, надземное (нужное подчеркнуть). -->
                Расположение газопровода: подземное, <u>надземное</u> (нужное подчеркнуть).
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				Наружный диаметр 
                <span class="edit-highlighting">
                    25мм
                    <!-- 32мм -->
                </span> 
			</td>
        </tr>
		<tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
    </table>
	
	<table class="body-table">
        <tr>
            <td class="table__cell-number">
            </td>
            <td colspan="3">
				Режим газоснабжения в точке подключения:
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				максимальный расход газа <span class="edit-highlighting">5.0 м<sup>3</sup>/час</span> 
			</td>
			<td>
				
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				максимальное давление газа <span class="edit-highlighting">______ мм.вод.ст;</span> 
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				минимальное давление газа <span class="edit-highlighting">______ мм.вод.ст;</span> 
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				режим газоснабжения: <u>постоянный</u>, на условиях прерывания (нужное подчеркнуть). 
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				<div class="margin-tb">
					<p class="paragraph underline">
						Периоды прерывания газоснабжения
					</p>
					<p class="paragraph-comment">
						(указать в формате с ДД.ММ по ДД.ММ, если несколько - указать через запятую)
					</p>
				</div>	
			</td>
        </tr>
		<tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
    </table>

	<table class="body-table">
        <tr>
            <td class="table__cell-number">
            </td>
            <td colspan="3">
				Сети газопотребления:
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				<!-- газопровод: <u>подземный</u>, надземный, (нужное подчеркнуть); -->
                газопровод: подземный, <u>надземный</u>, (нужное подчеркнуть);
			</td>
			<td>
				
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				<!-- материал: сталь, <u>полиэтилен</u> и иное (нужное подчеркнуть);  -->
                материал: <u>сталь</u>, полиэтилен и иное (нужное подчеркнуть); 
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				диаметр 
                <span class="edit-highlighting">
                    20мм
                    <!-- 25мм -->
                    <!-- 32мм -->
                </span>, давление (максимальное) <span class="edit-highlighting">
                    <!-- 0,15 МПа -->
                    0,0024 МПа
                    <!-- 0,004 МПа -->
                </span>, длина <span class="edit-highlighting"> {{actData?.outwardPipeLength.data}} м</span>  
			</td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				Отключающие устройства:  <span class="edit-highlighting">КШГ25</span> 
			</td>
        </tr>
		<tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
		<tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
				Газоиспользующее оборудование:
			</td>
        </tr>
    </table>

    <table class="point-table margin-top">
        <tr>
            <td class="table__cell-data_align-center" rowspan="2">
                <p>Порядковый номер</p>
            </td>
            <td class="table__cell-data_align-center" rowspan="2">
                <p>
                   Наименование тип, <br>
				   марка оборудования
                </p>  
            </td>   
            <td class="table__cell-data_align-center" rowspan="2">
                <p>
					Количество (штук)
                </p>
            </td>   
            <td class="table__cell-data_align-center" colspan="2">
                <p>
					Объем газопотребления
                </p>
            </td>   

        </tr>
		<tr>
            <td class="table__cell-data_align-center">
                <p>
					куб. метров в час
                </p>
            </td>   
            <td class="table__cell-data_align-center">
                <p>
                    тыс. куб. метров в год
                </p>
            </td>   
        </tr>

        <tr>
            <td class="table__cell-number table__cell-data_align-center">
            1.
            </td>
            <td class="table__cell-data_align-center">
                {{Boiler}}
            </td>   
            <td class="table__cell-data_align-center">
                1
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
            2.
            </td>
            <td class="table__cell-data_align-center">
                {{Counter}}
            </td>   
            <td class="table__cell-data_align-center">
                1
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
            3.
            </td>
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
        </tr>
    </table>
 
	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		Стороны составили настоящий акт о том, что границей разграничения имущественной принадлежности сторон является: 
        КШГ25
        <!-- стыковое соединение на подземном заглушенном газопроводе ПЭ32 на границе рассматриваемого участка -->
        <!-- седловой отвод ПЭ63/32 -->
	</p>
	<div class="margin-tb">
		<p class="paragraph underline">
			<span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>
		</p>
	</div>	

	<div class="margin-tb">
		<p class="paragraph underline"><span class="paragraphMargin"></span>
			Существующий газопровод: <span class="edit-highlighting">{{DataContract?.contract.pipeline.data}}</span>
		</p>
		<p class="paragraph-comment">
			(наименование сети газораспределения, адрес)
		</p>
	</div>	

	<p>
		к которому выполнено фактическое присоединение объекта капитального строительства, принадлежит исполнителю.
	</p>

	<p class="paragraph "><span class="paragraphMargin"></span>
		Газопровод от границы разграничения имущественной принадлежности до газоиспользующего оборудования		
	</p>
	<div class="margin-tb">
		<p class="paragraph underline">
			<span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>
		</p>
		<p class="paragraph-comment">
			(наименование объекта капитального строительства; адрес)
		</p>
	</div>
	<p>
		принадлежит заявителю.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		Стороны оформили и подписали настоящий акт о том, что границей разграничения эксплуатационной ответственности сторон является:
        КШГ25
        <!-- стыковое соединение на подземном заглушенном газопроводе ПЭ32 на границе рассматриваемого участка -->
        <!-- седловой отвод ПЭ63/32 -->
		<span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>
	</p>

	<div class="elem-print-avoid">
		<p class="header margin-top">
			<b>Схема газопроводов с указанием границы разграничения<br>
			имущественной принадлежности</b>
		</p>
        
		<svg v-if="fff === 1" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 235" style="enable-background:new 0 0 600 235;" xml:space="preserve"> 
				<!-- viewBox="0 0 508.6 235" styl e=enable-background: n e w 0 0 508.6 235; -->
				<g>
					<g>
						<line class="st0" x1="0.2" y1="38.8" x2="508.6" y2="38.8"/>
					</g>
					<g>
						<line class="st1" x1="0" y1="60" x2="508.4" y2="60"/>
					</g>
					<rect x="102.3" y="145.4" class="st2" width="124.1" height="67.9"/>
					<line class="st3" x1="152.3" y1="145.4" x2="152.3" y2="38.8"/>
					<line class="st3" x1="279.8" y1="114.3" x2="158.4" y2="35.7"/>
					<g>
						<circle class="st4" cx="408.5" cy="21.3" r="9.5"/>
						<g>
							<path class="st5" d="M407.4,17.9L407.4,17.9l-1.5,0.8l-0.2-0.9l1.9-1h1v8.5h-1.1V17.9z"/>
							<path class="st5" d="M411.7,24.7c0-0.5,0.3-0.8,0.8-0.8c0.5,0,0.8,0.3,0.8,0.8c0,0.5-0.3,0.8-0.8,0.8
								C412,25.5,411.7,25.1,411.7,24.7z"/>
						</g>
					</g>
					<g>
						<circle class="st4" cx="212" cy="159.5" r="9.5"/>
						<g>
							<path class="st5" d="M209,163.7V163l0.9-0.9c2.2-2.1,3.1-3.1,3.1-4.4c0-0.9-0.4-1.6-1.7-1.6c-0.8,0-1.4,0.4-1.8,0.7l-0.4-0.8
								c0.6-0.5,1.4-0.9,2.4-0.9c1.8,0,2.6,1.2,2.6,2.5c0,1.6-1.1,2.8-2.9,4.5l-0.7,0.6v0h3.8v0.9H209z"/>
							<path class="st5" d="M215.7,163c0-0.5,0.3-0.8,0.8-0.8c0.5,0,0.8,0.3,0.8,0.8c0,0.5-0.3,0.8-0.8,0.8
								C216,163.8,215.7,163.5,215.7,163z"/>
						</g>
					</g>
					<rect x="303" y="44.6" class="st6" width="140.6" height="10.1"/>
					<text transform="matrix(1 0 0 1 303.0035 51.5252)" class="st7 st8 st9">Граница земельного участка</text>
					<rect x="283" y="115.2" class="st6" width="203.3" height="73.7"/>
					<text transform="matrix(1 0 0 1 283.0249 122.1662)"><tspan x="0" y="0" class="st7 st8 st9">Граница раздела собственности </tspan><tspan x="0" y="12" class="st7 st8 st9">Разграничение установленное в точке врезки </tspan><tspan x="0" y="24" class="st7 st8 st9">газопровода потребителя на подземном </tspan><tspan x="0" y="36" class="st7 st8 st9">газопроводе ПЭ Ø63 в районе земельного </tspan><tspan x="0" y="48" class="st7 st8 st9">участка по адресу: </tspan><tspan x="0" y="60" class="st7 st8 st9">{{DataContract?.contract.contractAddress.data}}</tspan></text>
					<rect x="110.5" y="196.3" class="st6" width="69.6" height="10.2"/>
					<text transform="matrix(1 0 0 1 110.5009 203.2252)" class="st7 st8 st9">Жилой дом</text>
					<rect x="13.5" y="124.3" class="st6" width="108.3" height="21.1"/>
					<text transform="matrix(1 0 0 1 13.4742 131.2255)"><tspan x="0" y="0" class="st7 st8 st9">сеть газопотребления</tspan><tspan x="91.8" y="0" class="st7 st8 st9 st10">	</tspan><tspan x="0" y="12" class="st7 st8 st9">жилого здания</tspan></text>
					<polygon class="st3" points="138.8,52.3 152.3,38.8 165.8,52.3 152.3,52.3 	"/>
					<g>
						<circle class="st11" cx="152.3" cy="38.9" r="7"/>
					</g>
				</g>
		</svg>
        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 600 235" style="enable-background:new 0 0 600 235;" xml:space="preserve">
    
        <g>
            <g>
                <line class="st0" x1="0.2" y1="38.8" x2="508.6" y2="38.8"/>
            </g>
            <g>
                <line class="st1" x1="0" y1="60" x2="508.4" y2="60"/>
            </g>
            <rect x="102.3" y="145.4" class="st2" width="124.1" height="67.9"/>
            <line class="st3" x1="152.3" y1="145.4" x2="152.3" y2="94"/>
            <line class="st0" x1="152.3" y1="94" x2="152.3" y2="40.1"/>
            <g>
                <circle class="st3" cx="408.5" cy="21.3" r="9.5"/>
                <g>
                    <path d="M407.4,17.9L407.4,17.9l-1.5,0.8l-0.2-0.9l1.9-1h1v8.5h-1.1L407.4,17.9L407.4,17.9z"/>
                    <path d="M411.7,24.7c0-0.5,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8S411.7,25.1,411.7,24.7z"/>
                </g>
            </g>
            <g>
                <circle class="st3" cx="212" cy="159.5" r="9.5"/>
                <g>
                    <path d="M209,163.7V163l0.9-0.9c2.2-2.1,3.1-3.1,3.1-4.4c0-0.9-0.4-1.6-1.7-1.6c-0.8,0-1.4,0.4-1.8,0.7l-0.4-0.8
                        c0.6-0.5,1.4-0.9,2.4-0.9c1.8,0,2.6,1.2,2.6,2.5c0,1.6-1.1,2.8-2.9,4.5l-0.7,0.6l0,0h3.8v0.9L209,163.7L209,163.7z"/>
                    <path d="M215.7,163c0-0.5,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8S215.7,163.5,215.7,163z"/>
                </g>
            </g>
            <text transform="matrix(1 0 0 1 303.0035 51.5252)" class="st7 st8 st9">Граница земельного участка</text>
            <text transform="matrix(1 0 0 1 283.0249 122.1662)" class="st7 st8 st9">Граница раздела собственности </text>
            <g>
                <g>
                    <defs>
                        <rect id="SVGID_1_" x="49.6" y="415.8" width="497.3" height="10.3"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                    </clipPath>
                    <g style="clip-path:url(#SVGID_2_);">
                        <text transform="matrix(1.0007 0 0 1 49.5938 424.1866)"><tspan x="0" y="0" class="st7" style="font-size:9.0155px;">Ад</tspan><tspan x="11.1" y="0" class="st7" style="font-size:9.0155px;">р</tspan><tspan x="15.6" y="0" class="st7" style="font-size:9.0155px;">е</tspan><tspan x="19.6" y="0" class="st7" style="font-size:9.0155px;">с</tspan></text>
                    </g>
                </g>
                <g>
                    <defs>
                        <rect id="SVGID_3_" x="49.6" y="415.8" width="497.3" height="10.3"/>
                    </defs>
                    <clipPath id="SVGID_4_">
                        <use xlink:href="#SVGID_3_"  style="overflow:visible;"/>
                    </clipPath>
                    <g style="clip-path:url(#SVGID_4_);">
                        <text transform="matrix(1.0007 0 0 1 73.1719 424.1866)" class="st7" style="font-size:9.9772px;"> </text>
                    </g>
                </g>
                <polyline class="st9" points="49.6,425.1 49.6,425.6 73.2,425.6 73.2,425.1 49.6,425.1 		"/>
            </g>
            <text transform="matrix(1 0 0 1 283.0249 134.1662)" class="st7 st8 st9">Адрес {{DataContract?.contract.contractAddress.data}}</text>
            <text transform="matrix(1 0 0 1 110.5009 203.2252)" class="st7 st8 st9">Жилой дом</text>
            <text transform="matrix(1 0 0 1 13.4742 131.2255)" class="st7 st8 st9">сеть газопотребления</text>
            <text transform="matrix(1 0 0 1 95.563 107.5499)" class="st7 st8 st9">КШГ25</text>
            <text transform="matrix(1 0 0 1 13.4742 143.2255)" class="st7 st8 st9">жилого здания</text>
            <g>
                <polygon class="st11" points="138.8,121 152.3,107.5 165.8,121 152.3,121 		"/>
                <polygon class="st11" points="165.8,94 152.3,107.5 138.8,94 152.3,94 		"/>
            </g>
            <g>
                <line class="st3" x1="280.3" y1="114.3" x2="152.8" y2="60"/>
                <line class="st12" x1="152.8" y1="60" x2="158.1" y2="65.4"/>
                <line class="st12" x1="152.8" y1="60" x2="160.3" y2="60"/>
            </g>
            </g>
        </svg>
 	</div>

	<p class="paragraph margin-top">
		Условные обозначения:
	</p>
	<p class="paragraph">
		1.&ensp;Сеть газораспределения: <span class="edit-highlighting">{{DataContract?.contract.pipeline.data}}</span>
	</p>
	<p class="paragraph">
		2.&ensp;Сеть газопотребления: «Газоснабжение жилого дома <span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}»</span>  
	</p>

	<div class="elem-print-avoid">
		<p class="header margin-top">
			<b>Схема газопроводов с указанием границы разграничения<br> 
				эксплуатационной ответственности</b>
		</p>
		<svg v-if="fff === 1" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 235" style="enable-background:new 0 0 600 235;" xml:space="preserve"> 
				<!-- viewBox="0 0 508.6 235" styl e=enable-background: n e w 0 0 508.6 235; -->
				<g>
					<g>
						<line class="st0" x1="0.2" y1="38.8" x2="508.6" y2="38.8"/>
					</g>
					<g>
						<line class="st1" x1="0" y1="60" x2="508.4" y2="60"/>
					</g>
					<rect x="102.3" y="145.4" class="st2" width="124.1" height="67.9"/>
					<line class="st3" x1="152.3" y1="145.4" x2="152.3" y2="38.8"/>
					<line class="st3" x1="279.8" y1="114.3" x2="158.4" y2="35.7"/>
					<g>
						<circle class="st4" cx="408.5" cy="21.3" r="9.5"/>
						<g>
							<path class="st5" d="M407.4,17.9L407.4,17.9l-1.5,0.8l-0.2-0.9l1.9-1h1v8.5h-1.1V17.9z"/>
							<path class="st5" d="M411.7,24.7c0-0.5,0.3-0.8,0.8-0.8c0.5,0,0.8,0.3,0.8,0.8c0,0.5-0.3,0.8-0.8,0.8
								C412,25.5,411.7,25.1,411.7,24.7z"/>
						</g>
					</g>
					<g>
						<circle class="st4" cx="212" cy="159.5" r="9.5"/>
						<g>
							<path class="st5" d="M209,163.7V163l0.9-0.9c2.2-2.1,3.1-3.1,3.1-4.4c0-0.9-0.4-1.6-1.7-1.6c-0.8,0-1.4,0.4-1.8,0.7l-0.4-0.8
								c0.6-0.5,1.4-0.9,2.4-0.9c1.8,0,2.6,1.2,2.6,2.5c0,1.6-1.1,2.8-2.9,4.5l-0.7,0.6v0h3.8v0.9H209z"/>
							<path class="st5" d="M215.7,163c0-0.5,0.3-0.8,0.8-0.8c0.5,0,0.8,0.3,0.8,0.8c0,0.5-0.3,0.8-0.8,0.8
								C216,163.8,215.7,163.5,215.7,163z"/>
						</g>
					</g>
					<rect x="303" y="44.6" class="st6" width="140.6" height="10.1"/>
					<text transform="matrix(1 0 0 1 303.0035 51.5252)" class="st7 st8 st9">Граница земельного участка</text>
					<rect x="283" y="115.2" class="st6" width="203.3" height="73.7"/>
					<text transform="matrix(1 0 0 1 283.0249 122.1662)"><tspan x="0" y="0" class="st7 st8 st9">Граница раздела собственности </tspan><tspan x="0" y="12" class="st7 st8 st9">Разграничение установленное в точке врезки </tspan><tspan x="0" y="24" class="st7 st8 st9">газопровода потребителя на подземном </tspan><tspan x="0" y="36" class="st7 st8 st9">газопроводе ПЭ Ø63 в районе земельного </tspan><tspan x="0" y="48" class="st7 st8 st9">участка по адресу: </tspan><tspan x="0" y="60" class="st7 st8 st9">{{DataContract?.contract.contractAddress.data}}</tspan></text>
					<rect x="110.5" y="196.3" class="st6" width="69.6" height="10.2"/>
					<text transform="matrix(1 0 0 1 110.5009 203.2252)" class="st7 st8 st9">Жилой дом</text>
					<rect x="13.5" y="124.3" class="st6" width="108.3" height="21.1"/>
					<text transform="matrix(1 0 0 1 13.4742 131.2255)"><tspan x="0" y="0" class="st7 st8 st9">сеть газопотребления</tspan><tspan x="91.8" y="0" class="st7 st8 st9 st10">	</tspan><tspan x="0" y="12" class="st7 st8 st9">жилого здания</tspan></text>
					<polygon class="st3" points="138.8,52.3 152.3,38.8 165.8,52.3 152.3,52.3 	"/>
                    
					<g>
						<circle class="st11" cx="152.3" cy="38.9" r="7"/>
					</g>
				</g>
		</svg>
        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 600 235" style="enable-background:new 0 0 600 235;" xml:space="preserve">
    
        <g>
            <g>
                <line class="st0" x1="0.2" y1="38.8" x2="508.6" y2="38.8"/>
            </g>
            <g>
                <line class="st1" x1="0" y1="60" x2="508.4" y2="60"/>
            </g>
            <rect x="102.3" y="145.4" class="st2" width="124.1" height="67.9"/>
            <line class="st3" x1="152.3" y1="145.4" x2="152.3" y2="94"/>
            <line class="st0" x1="152.3" y1="94" x2="152.3" y2="40.1"/>
            <g>
                <circle class="st3" cx="408.5" cy="21.3" r="9.5"/>
                <g>
                    <path d="M407.4,17.9L407.4,17.9l-1.5,0.8l-0.2-0.9l1.9-1h1v8.5h-1.1L407.4,17.9L407.4,17.9z"/>
                    <path d="M411.7,24.7c0-0.5,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8S411.7,25.1,411.7,24.7z"/>
                </g>
            </g>
            <g>
                <circle class="st3" cx="212" cy="159.5" r="9.5"/>
                <g>
                    <path d="M209,163.7V163l0.9-0.9c2.2-2.1,3.1-3.1,3.1-4.4c0-0.9-0.4-1.6-1.7-1.6c-0.8,0-1.4,0.4-1.8,0.7l-0.4-0.8
                        c0.6-0.5,1.4-0.9,2.4-0.9c1.8,0,2.6,1.2,2.6,2.5c0,1.6-1.1,2.8-2.9,4.5l-0.7,0.6l0,0h3.8v0.9L209,163.7L209,163.7z"/>
                    <path d="M215.7,163c0-0.5,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8S215.7,163.5,215.7,163z"/>
                </g>
            </g>
            <text transform="matrix(1 0 0 1 303.0035 51.5252)" class="st7 st8 st9">Граница земельного участка</text>
            <text transform="matrix(1 0 0 1 283.0249 122.1662)" class="st7 st8 st9">Граница раздела собственности </text>
            <g>
                <g>
                    <defs>
                        <rect id="SVGID_1_" x="49.6" y="415.8" width="497.3" height="10.3"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                    </clipPath>
                    <g style="clip-path:url(#SVGID_2_);">
                        <text transform="matrix(1.0007 0 0 1 49.5938 424.1866)"><tspan x="0" y="0" class="st7" style="font-size:9.0155px;">Ад</tspan><tspan x="11.1" y="0" class="st7" style="font-size:9.0155px;">р</tspan><tspan x="15.6" y="0" class="st7" style="font-size:9.0155px;">е</tspan><tspan x="19.6" y="0" class="st7" style="font-size:9.0155px;">с</tspan></text>
                    </g>
                </g>
                <g>
                    <defs>
                        <rect id="SVGID_3_" x="49.6" y="415.8" width="497.3" height="10.3"/>
                    </defs>
                    <clipPath id="SVGID_4_">
                        <use xlink:href="#SVGID_3_"  style="overflow:visible;"/>
                    </clipPath>
                    <g style="clip-path:url(#SVGID_4_);">
                        <text transform="matrix(1.0007 0 0 1 73.1719 424.1866)" class="st7" style="font-size:9.9772px;"> </text>
                    </g>
                </g>
                <polyline class="st9" points="49.6,425.1 49.6,425.6 73.2,425.6 73.2,425.1 49.6,425.1 		"/>
            </g>
            <text transform="matrix(1 0 0 1 283.0249 134.1662)" class="st7 st8 st9">Адрес {{DataContract?.contract.contractAddress.data}}</text>
            <text transform="matrix(1 0 0 1 110.5009 203.2252)" class="st7 st8 st9">Жилой дом</text>
            <text transform="matrix(1 0 0 1 13.4742 131.2255)" class="st7 st8 st9">сеть газопотребления</text>
            <text transform="matrix(1 0 0 1 95.563 107.5499)" class="st7 st8 st9">КШГ25</text>
            <text transform="matrix(1 0 0 1 13.4742 143.2255)" class="st7 st8 st9">жилого здания</text>
            <g>
                <polygon class="st11" points="138.8,121 152.3,107.5 165.8,121 152.3,121 		"/>
                <polygon class="st11" points="165.8,94 152.3,107.5 138.8,94 152.3,94 		"/>
            </g>
            <g>
                <line class="st3" x1="280.3" y1="114.3" x2="152.8" y2="60"/>
                <line class="st12" x1="152.8" y1="60" x2="158.1" y2="65.4"/>
                <line class="st12" x1="152.8" y1="60" x2="160.3" y2="60"/>
            </g>
            </g>
        </svg>
	</div>

        

	<p class="paragraph margin-top">
	Условные обозначения:
	</p>
	<p class="paragraph">
	1.&ensp;Сеть газораспределения: <span class="edit-highlighting">{{DataContract?.contract.pipeline.data}}</span>
	</p>
	<p class="paragraph">
	2.&ensp;Сеть газопотребления: «Газоснабжение жилого дома <span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}»</span>  
	</p>

	<table class="point-table table-fixed margin-top">
        <tr>
            <td class="table__cell-data_align-center" rowspan="2">
                <p>Характеристика газопроводов</p>
            </td>
            <td class="table__cell-data_align-center" colspan="2">
                <p>
					Газопроводы
                </p>
            </td>     
        </tr>
		<tr>
            <td class="table__cell-data_align-center">
                <p>
					сеть газораспределения
                </p>
            </td>   
            <td class="table__cell-data_align-center">
                <p>
                    сеть газопотребления
                </p>
            </td>   
        </tr>

        <tr>
            <td class="table__cell-number table__cell-data_align-center">
				Рабочее давление
            </td>
            <td class="table__cell-data_align-center">
                0,15
                <!-- 0,004 -->
            </td>   
            <td class="table__cell-data_align-center">
                <!-- 0,15 -->
                <!-- 0,004 -->
                0,0024
            </td>   
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
				Способ прокладки
            </td>
            <td class="table__cell-data_align-center">
                подземно
            </td>   
            <td class="table__cell-data_align-center">
                <!-- подземно -->
                надземно
            </td>   
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
                Диаметр, мм
            </td>
            <td class="table__cell-data_align-center">
                <!-- 63 -->
                <!-- 32 -->
                ду25
            </td>   
            <td class="table__cell-data_align-center">
                <!-- 32 -->
                ду20
            </td>     
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
				Материал труб
            </td>
            <td class="table__cell-data_align-center">
                <!-- ПЭ -->
                Ст
            </td>   
            <td class="table__cell-data_align-center">
                <!-- ПЭ -->
                Ст
            </td>     
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
				Технологическое устройство
            </td>
            <td class="table__cell-data_align-center">
                <!-- --- -->
                КШГ25
                <!-- Седловой отвод -->
            </td>   
            <td class="table__cell-data_align-center">
                ---
            </td>     
        </tr>
    </table>

	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		Заявитель не имеет претензий к оказанию услуг исполнителя.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		Настоящий акт имеет силу акта сдачи приемки выполненных работ (оказанных услуг).
	</p>

    <table class="parties-table margin-top ">
		<caption><b>Подписи сторон</b></caption>
        <tr>
            <td>
            	<b>Исполнитель</b>
            </td>
            <td>
                <b>Заявитель</b>
            </td>
        </tr>
        <tr>
			<td><b>Тех. директор</b></td>
			<td><b>Гражданин РФ</b></td>
        </tr>
		<tr>
			<td>___________________/ Г.Ф.Гилев</td>
			<td>___________________/____________/</td>
        </tr>
		<tr>
			<td>М.П.</td>
			<td></td>
        </tr>
    </table>


</template>

<script lang="ts">

import {getMonthYearDate, getNowDate, getNowFullFormatDate} from '@/func'
import { Act } from '@/model/Act';
import { DataContract } from '@/model/DataContract';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        DataContract: {
            type: Object as PropType<DataContract>,
        },
        actData: {
            type: Object as PropType<Act>,
        },
        PersonList: {
            type: Array,
        },
        ContractInfoList: {
            type: Array,

        },
        Boiler: {
            type: String,
            default: () => {
                ""
            }
        },
        Counter: {
            type: String,
            default: () => {
                ""
            }
        },
    },
    methods:{
        getMonthYearDate,
        getNowDate,
        getNowFullFormatDate
    }
});

</script>


<style scoped lang="less">
* {
    font-size: 10pt;
}
.paragraph-comment {
	text-align: center;
	font-size: 9pt;
}

.logo-img {
    width: 56.4mm; 
    height: 28.2mm;
    margin-bottom: 10pt;
}

.margin-bottom {
    margin-bottom: 10pt;
}

.flex {
    display: flex;
    justify-content: flex-end;
}

.fifty-persent {
    position: relative;
    width: 50%;
    text-align: center;
}

.header {
    // margin-top: 24pt;
    text-align: center;

    &__org-name {
        font-family: Arial, Helvetica, sans-serif;
    }

    &__org-data {
        padding-top: 1pt;
    }

    &__condition-number {
        text-align: left;
        padding: 20pt 0pt;
    }

    &__condition-name {
        font-weight: 700;
        padding-bottom: 10pt;
    }
}

.table {

    &__cell-number {
    padding: 0 0 0 5pt;
    width: 25pt;
    vertical-align: top;
    }

    &__cell-marker {
        padding: 0 5pt 0 0pt;
        width: 25pt;
        vertical-align: top;
        text-align: right;    
    }

    &__cell-discription {
        text-align: center;
    }

    &__cell-data {

        &_white-text {
            color: #fff   
        }

        &_rotate-text-270 {

            height: 6.5cm;
        
            p {
               writing-mode: vertical-rl;
               transform: rotate(180deg);
               text-align: center;
               margin: 0 5pt;
            }
        }

        &_align-center {
            text-align: center;
            p {
                margin: 0pt 5pt;
            }
        }

    }

}

.body-table {
    display: table;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse; 

    td {
        padding-bottom: 1pt;
    }

	

}

.point-table {
    display: table;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

    td {
        vertical-align: middle;
        border: 1pt solid #000;
        padding: 2pt;
    }

	td:nth-child(1):not(tr:nth-child(1) td) {
		text-align: left;
	}
}

.table-fixed {
	table-layout: fixed;
}

.parties-table {
	display: table;
	width: 100%;
	text-align: center;
	table-layout: fixed;
}

.margin-top {
    margin-top: 20pt;
}

.margin-tb {
    margin: 3pt 0pt;
}

.cell {
    width: 2cm;
    text-align: center;
    vertical-align: bottom;
}

.cell-2 {
    width: 5cm;
    text-align: left;
    vertical-align: bottom;
}

.cell-3 {
    width: 6cm;
}

.cell-4 {
    width: 0.5cm;
}

.cell-5 {
    width: 17%;
    text-align: center;
}

.cell-6 {
    text-align: right;
}

.cell-7 {
    width: 6cm;
    text-align: center;
}

td {
    //border: 1pt dotted rgb(171, 171, 171);
    margin: 0;
    padding: 0;
    vertical-align: top;
}

.underline {
    border-bottom: 1pt solid #000;
}

.st0{fill:none;stroke:#020203;stroke-width:2.126;stroke-miterlimit:10;}
.st1{fill:none;stroke:#020203;stroke-width:2.126;stroke-miterlimit:10;stroke-dasharray:2.126;}
.st2{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#020203;stroke-width:1.4173;stroke-linecap:square;stroke-miterlimit:10;}
.st3{fill:none;stroke:#020203;stroke-width:1.4173;stroke-miterlimit:10;}
.st4{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#020203;stroke-width:1.4173;stroke-miterlimit:10;}
//.st5{fill:#020203;}
.st6{fill:none;}
.st7{fill:#010202;}
.st8{font-family:'TimesNewRomanPSMT';}
.st9{font-size:10px;}
.st10{letter-spacing:5;}
.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#020203;stroke-width:1.4173;stroke-miterlimit:10;}
        

@media print {

	.elem-print-avoid {
		page-break-inside: avoid;
	}
}

</style>